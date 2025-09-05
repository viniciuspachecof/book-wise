import { Container } from './style';
import { InicioCardLivroRecente } from '@/components/InicioCardLivroRecente';
import { InicioCardLivroPopular } from '@/components/InicioCardLivroPopular';
import { InicioCardLivroUltima } from '@/components/InicioCardLivroUltima';
import { UserIcon } from '@phosphor-icons/react';
import { PerfilCardLivro } from '@/components/PerfilCardLivro';

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
          <p className="titulo-container">Livros populares</p>
          <InicioCardLivroPopular />
        </div>
      </div>
    </Container>
  );
}
