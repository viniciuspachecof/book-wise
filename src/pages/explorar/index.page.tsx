import { ExplorarCardLivro } from '@/components/ExplorarCardLivro';
import { Button, Container } from './style';
import { BinocularsIcon } from '@phosphor-icons/react';
import { GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { IBook } from '@/interface/IBook';
import { ICategory } from '@/interface/ICategory';
import { useEffect, useState } from 'react';

interface ExplorarProps {
  books: IBook[];
  categories: ICategory[];
}

export default function Explorar({ books, categories }: ExplorarProps) {
  const [listBooks, setListBooks] = useState<IBook[]>(books);
  const [categoryActive, setCategoryActive] = useState<string | null>('');

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    buscarPost(debouncedSearch);
  }, [debouncedSearch]);

  function buscarPost(query: string) {
    if (!query) {
      setListBooks(books);
    } else {
      const filterListBooks = books.filter(
        (book) => book.name.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
      );

      setListBooks(filterListBooks);
    }
  }

  function handlerCategory(id: string | null) {
    setCategoryActive(id);

    if (!id) {
      setListBooks(books);
    } else {
      const filterListBooks = books.filter((book) => book.categories.find((category) => category.id === id));

      setListBooks(filterListBooks);
    }
  }

  return (
    <Container>
      <div className="container-busca">
        <div className="titulo-pagina">
          <BinocularsIcon size={32} /> <h1>Explorar</h1>
        </div>
        <input
          name="buscar-livro"
          type="text"
          placeholder="Buscar livro ou autor"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container-categorias">
        <Button onClick={() => handlerCategory(null)} active={!categoryActive}>
          Tudo
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handlerCategory(category.id)}
            active={categoryActive === category.id}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="container-livros">
        {listBooks.map((book) => (
          <ExplorarCardLivro key={book.id} {...book} />
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      categories: {
        select: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
    },
  });

  const categories = await prisma.category.findMany();

  const listBooksFormat = books.map((book) => ({
    ...book,
    mediaRate: book.ratings.reduce((acc, rating) => acc + rating.rate, 0) / book.ratings.length,
    categories: book.categories.map((c) => c.category),
  }));

  return {
    props: {
      books: listBooksFormat,
      categories: categories,
    },
  };
};
