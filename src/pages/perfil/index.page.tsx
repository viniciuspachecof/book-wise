import { Container } from './style';
import { BookmarkSimpleIcon, BookOpenIcon, BooksIcon, UserIcon, UserListIcon } from '@phosphor-icons/react';
import { PerfilCardLivro } from '@/components/PerfilCardLivro';
import Image from 'next/image';
import imgAvatarUsuario from '@/assets/avatar-usuario-perfil.svg';

export default function Perfil() {
  return (
    <Container>
      <div className="titulo-pagina">
        <UserIcon size={32} /> <h1>Perfil</h1>
      </div>

      <div className="container-principal">
        <div className="container-primario">
          <input name="buscar-livro" type="text" placeholder="Buscar livro avaliado" />

          <div className="container-avaliacoes">
            <PerfilCardLivro />
            <PerfilCardLivro />
            <PerfilCardLivro />
          </div>
        </div>

        <div className="container-secundario">
          <div className="container-perfil">
            <Image src={imgAvatarUsuario} alt="" />
            <p>Fulano de tal</p>
            <span>membro desde 2025</span>
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
