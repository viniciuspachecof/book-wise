import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroRecente from '@/assets/inicio-livro-recente.svg';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';

export function InicioCardLivroUltima() {
  const { onDisplayDetails } = useContext(BookWiseContext);

  return (
    <Container onClick={() => onDisplayDetails(true)}>
      <div className="container-livro">
        <Image src={imgLivroRecente} alt="" />
        <div>
          <div className="container-avaliacao">
            <span className="data-pub">Há 2 dias</span>
            <Rating
              initialValue={1}
              readonly={true}
              fillColor="#a78bfa"
              emptyColor="transparent"
              SVGstrokeColor="#a78bfa"
              SVGstorkeWidth={2}
              size={18}
            />
          </div>

          <p className="titulo-livro">O Hobbit</p>
          <span className="autor-livro">Fulano</span>

          <p className="descricao-livro">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras
            fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh
          </p>
        </div>
      </div>
    </Container>
  );
}
