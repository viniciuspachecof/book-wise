import { Container } from './style';
import { InicioCardLivroRecente } from '@/components/InicioCardLivroRecente';
import { InicioCardLivroPopular } from '@/components/InicioCardLivroPopular';
import { InicioCardLivroUltima } from '@/components/InicioCardLivroUltima';
import { ChartLineUpIcon } from '@phosphor-icons/react';
import { useSession } from 'next-auth/react';

export default function Home() {
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';

  return (
    <Container>
      <div className="titulo-pagina">
        <ChartLineUpIcon size={32} /> <h1>Início</h1>
      </div>

      <div className="container-principal">
        <div className="container-primario">
          {isSignedIn && (
            <>
              <p className="titulo-container">Sua última leitura</p>
              <div className="container-ultima-leitura">
                <InicioCardLivroUltima />
              </div>
            </>
          )}

          <p className="titulo-container">Avaliações mais recentes</p>
          <div className="container-avaliacoes-recentes">
            <InicioCardLivroRecente />
          </div>
        </div>

        <div className="container-secundario">
          <p className="titulo-container">Livros populares</p>
          <div className="container-popular">
            <InicioCardLivroPopular />
          </div>
        </div>
      </div>
    </Container>
  );
}
