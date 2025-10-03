import { Container } from './style';
import { BookmarkSimpleIcon, BookOpenIcon, BooksIcon, UserIcon, UserListIcon } from '@phosphor-icons/react';
import { PerfilCardLivro } from '@/components/PerfilCardLivro';
import Image from 'next/image';
import dayjs from 'dayjs';
import avatarUsuarioImg from '@/assets/avatar-usuario.png';
import { GetStaticPaths, GetStaticProps } from 'next';
import { prisma } from '@/lib/prisma';
import { IRating } from '@/interface/IRating';

interface PerfilProps {
  user: {
    name: string;
    avatarUrl: string;
    createdAt: Date;
  };
  ratings: IRating[];
}

export default function Perfil({ user, ratings }: PerfilProps) {
  return (
    <Container>
      <div className="titulo-pagina">
        <UserIcon size={32} /> <h1>Perfil</h1>
      </div>

      <div className="container-principal">
        <div className="container-primario">
          <input name="buscar-livro" type="text" placeholder="Buscar livro avaliado" />

          <div className="container-avaliacoes">
            {ratings.length && ratings.map((rating) => <PerfilCardLivro key={rating.id} {...rating} />)}
          </div>
        </div>

        <div className="container-secundario">
          <div className="container-perfil">
            <Image width={72} height={72} src={user.avatarUrl ?? avatarUsuarioImg} alt="" />
            <p>{user.name}</p>
            <span>{dayjs(user.createdAt).format('[ membro desde ]YYYY')}</span>
          </div>

          <div className="divisao"></div>

          <div className="container-info-principal">
            <div className="container-info">
              <BookOpenIcon size={32} />
              <div>
                <p>3853</p>
                <span>Páginas lidas</span>
              </div>
            </div>

            <div className="container-info">
              <BooksIcon size={32} />
              <div>
                <p>10</p>
                <span>Livros avaliados</span>
              </div>
            </div>

            <div className="container-info">
              <UserListIcon size={32} />
              <div>
                <p>8</p>
                <span>Autores lidos</span>
              </div>
            </div>

            <div className="container-info">
              <BookmarkSimpleIcon size={32} />
              <div>
                <p>Computação</p>
                <span>Categoria mais lida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = String(params?.id);

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  const ratingsUser = await prisma.rating.findMany({
    where: {
      user_id: id,
    },
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
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  const ratingsUserFormat = ratingsUser.map((rating) => ({
    ...rating,
    created_at: rating.created_at.toISOString(),
  }));

  return {
    props: {
      user: {
        name: user.name,
        avatarUrl: user.avatar_url,
        createdAt: user.created_at.toISOString(),
      },
      ratings: ratingsUserFormat,
    },
  };
};
