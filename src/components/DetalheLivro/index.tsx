import Image from 'next/image';
import { Container, ContainerAvaliacaoUsuario, ContainerLivro, Overlay } from './style';
import imgDetalheLivro from '@/assets/detalhe-livro.svg';
import { Rating } from 'react-simple-star-rating';
import { BookmarkSimpleIcon, BookOpenIcon, CheckIcon, XIcon } from '@phosphor-icons/react';
import { CardAvaliacaoUsuario } from '../CardAvaliacaoUsuario';
import { useContext, useEffect, useState } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import avatarUsuarioImg from '@/assets/avatar-usuario-avaliacao.svg';
import { useSession } from 'next-auth/react';

export function DetalheLivro() {
  const { displayDetails, onDisplayDetails } = useContext(BookWiseContext);
  const { onDisplayAvalation } = useContext(BookWiseContext);
  const { bookSelected } = useContext(BookWiseContext);
  const [displayAvaliation, setDisplayAvaliaton] = useState(false);
  const [mounted, setMounted] = useState(false);
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';

  // Exibir apenas após montagem no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleAvaliar() {
    if (!isSignedIn) {
      onDisplayAvalation(true);
    } else {
      setDisplayAvaliaton(true);
    }
  }

  return (
    <>
      <Overlay open={displayDetails} />
      <Container open={displayDetails}>
        <div className="close">
          <button onClick={() => onDisplayDetails(false, '')}>
            <XIcon size={24} />
          </button>
        </div>

        <ContainerLivro>
          <div className="container-livro">
            <Image width={172} height={242} src={bookSelected?.cover_url ?? ''} alt="" />
            <div className="container-livro-info">
              <div>
                <p className="titulo-livro">{bookSelected?.name}</p>
                <span className="autor-livro">{bookSelected?.author}</span>
              </div>

              <div>
                <Rating
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
                <p>{bookSelected?.total_pages}</p>
              </div>
            </div>
          </div>
        </ContainerLivro>

        <ContainerAvaliacaoUsuario>
          <div className="avaliar">
            <span>Avaliações</span>
            {!displayAvaliation && <button onClick={handleAvaliar}>Avaliar</button>}
          </div>

          <div className="container-avaliacoes">
            {displayAvaliation && (
              <div className="container-avaliacao-usuario">
                <div>
                  <Image src={avatarUsuarioImg} alt="" />
                  <p className="nome-usuario">Vinicius</p>
                  <Rating
                    initialValue={1}
                    readonly={false}
                    fillColor="#a78bfa"
                    emptyColor="transparent"
                    SVGstrokeColor="#a78bfa"
                    SVGstorkeWidth={2}
                    size={22}
                  />
                </div>
                <div className="container-textarea">
                  <textarea name="avaliacao" id="avaliacao" placeholder="Escreva sua avaliação"></textarea>
                </div>

                <div>
                  <button onClick={() => setDisplayAvaliaton(false)}>
                    <XIcon size={24} color="#8381D9" />
                  </button>
                  <button>
                    <CheckIcon size={24} color="#50B2C0" />
                  </button>
                </div>
              </div>
            )}

            <CardAvaliacaoUsuario />
          </div>
        </ContainerAvaliacaoUsuario>
      </Container>
    </>
  );
}
