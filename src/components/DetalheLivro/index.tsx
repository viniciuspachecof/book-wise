import Image from 'next/image';
import { Container, ContainerAvaliacaoUsuario, ContainerLivro, Overlay } from './style';
import imgDetalheLivro from '@/assets/detalhe-livro.svg';
import { Rating } from 'react-simple-star-rating';
import { BookmarkSimpleIcon, BookOpenIcon, XIcon } from '@phosphor-icons/react';
import { CardAvaliacaoUsuario } from '../CardAvaliacaoUsuario';

export function DetalheLivro() {
  return (
    <>
      <Overlay />
      <Container>
        <div className="close">
          <button>
            <XIcon size={24} />
          </button>
        </div>

        <ContainerLivro>
          <div className="container-livro">
            <Image src={imgDetalheLivro} alt="" />
            <div className="container-livro-info">
              <div>
                <p className="titulo-livro">A revolução dos bichos</p>
                <span className="autor-livro">George Orwell</span>
              </div>

              <div>
                <Rating
                  onClick={() => console.log('alterou')}
                  initialValue={1}
                  readonly={true}
                  fillColor="#a78bfa"
                  emptyColor="transparent"
                  SVGstrokeColor="#a78bfa"
                  SVGstorkeWidth={2}
                  size={20}
                />
                <p className="qtd-avaliacao">3 avaliações</p>
              </div>
            </div>
          </div>

          <div className="container-info-principal">
            <div className="container-info">
              <BookmarkSimpleIcon size={24} />
              <div>
                <span>Categoria</span>
                <p>Computação, educação</p>
              </div>
            </div>

            <div className="container-info">
              <BookOpenIcon size={24} />
              <div>
                <span>Páginas</span>
                <p>160</p>
              </div>
            </div>
          </div>
        </ContainerLivro>

        <ContainerAvaliacaoUsuario>
          <div className="avaliar">
            <span>Avaliações</span>
            <button>Avaliar</button>
          </div>
          <div className="container-avaliacoes">
            <CardAvaliacaoUsuario />
          </div>
        </ContainerAvaliacaoUsuario>
      </Container>
    </>
  );
}
