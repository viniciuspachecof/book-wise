import { Container } from './style';
import { InicioCardLivroRecente } from '@/components/InicioCardLivroRecente';
import { InicioCardLivroPopular } from '@/components/InicioCardLivroPopular';
import { InicioCardLivroUltima } from '@/components/InicioCardLivroUltima';
import { ChartLineUpIcon } from '@phosphor-icons/react';

export default function Home() {
  const isLogado = true;

  return (
    <Container>
      <div className="titulo-pagina">
        <ChartLineUpIcon size={32} /> <h1>Início</h1>
      </div>

      <div className="container-principal">
        <div className="container-primario">
          {isLogado && (
            <div className="container-ultima-leitura">
              <p className="titulo-container">Sua última leitura</p>
              <InicioCardLivroUltima />
            </div>
          )}

          <div className="container-avaliacoes-recentes">
            <p className="titulo-container">Avaliações mais recentes</p>
            <InicioCardLivroRecente />
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
