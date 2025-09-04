import { Container } from './styles';
import { InicioCardLivroRecente } from '@/components/InicioCardLivroRecente';
import { InicioCardLivroPopular } from '@/components/InicioCardLivroPopular';
import { InicioCardLivroUltima } from '@/components/InicioCardLivroUltima';
import { PerfilCardLivro } from '@/components/PerfilCardLivro';

export default function Home() {
  return (
    <Container>
      <div className="container-avaliacoes">
        <span>Ultima leitura</span>
        <InicioCardLivroUltima />

        <span>Avaliações recentes</span>
        <InicioCardLivroRecente />

        <span>Perfil livro</span>
        <PerfilCardLivro />
      </div>
      <div className="container-populares-usuario">
        <span>Popular</span>
        <InicioCardLivroPopular />
      </div>
    </Container>
  );
}
