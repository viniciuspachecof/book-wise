import { Container } from './style';
import { InicioCardLivroRecente } from '@/components/InicioCardLivroRecente';
import { InicioCardLivroPopular } from '@/components/InicioCardLivroPopular';
import { InicioCardLivroUltima } from '@/components/InicioCardLivroUltima';
import { ChartLineUpIcon } from '@phosphor-icons/react';
import { useSession } from 'next-auth/react';
import { IRating } from '@/interface/IRating';
import { GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import { IBook } from '@/interface/IBook';

interface HomeProps {
  ratings: IRating[];
  books: IBook[];
}

export default function Home({ ratings, books }: HomeProps) {
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';
  const [recentRatingUser, setRecentRatingUser] = useState<IRating>();

  useEffect(() => {
    if (isSignedIn) {
      async function fetchData() {
        const response = await api.get(`/rating/user-rating`);

        setRecentRatingUser(response.data);
      }

      fetchData();
    }
  }, [isSignedIn]);

  return (
    <Container>
      <div className="titulo-pagina">
        <ChartLineUpIcon size={32} /> <h1>Início</h1>
      </div>

      <div className="container-principal">
        <div className="container-primario">
          {recentRatingUser && (
            <>
              <p className="titulo-container">Sua última leitura</p>
              <div className="container-ultima-leitura">
                <InicioCardLivroUltima {...recentRatingUser} />
              </div>
            </>
          )}

          <p className="titulo-container">Avaliações mais recentes</p>
          <div className="container-avaliacoes-recentes">
            {ratings && ratings.map((rating) => <InicioCardLivroRecente key={rating.id} {...rating} />)}
          </div>
        </div>

        <div className="container-secundario">
          <p className="titulo-container">Livros populares</p>
          <div className="container-popular">
            {books && books.map((book) => <InicioCardLivroPopular key={book.id} {...book} />)}
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      rate: true,
      created_at: true,
      book: {
        select: {
          id: true,
          name: true,
          cover_url: true,
          summary: true,
          author: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
  });

  const ratingsFormat = ratings.map((rating) => ({
    ...rating,
    created_at: rating.created_at.toISOString(),
  }));

  const books = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
    },
  });

  const listBooksFormat = books.map((book) => ({
    ...book,
    mediaRate: book.ratings.length
      ? book.ratings.reduce((acc, rating) => acc + rating.rate, 0) / book.ratings.length
      : 0,
  }));

  const orderBooks = listBooksFormat.sort((a, b) => b.mediaRate - a.mediaRate).slice(0, 4);

  return {
    props: {
      ratings: ratingsFormat,
      books: orderBooks,
    },
  };
};
