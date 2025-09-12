import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroPopular from '@/assets/inicio-livro-popular.svg';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';

export function InicioCardLivroPopular() {
  const { onDisplayDetails } = useContext(BookWiseContext);

  return (
    <Container onClick={() => onDisplayDetails(true)}>
      <div className="container-livro">
        <Image src={imgLivroPopular} alt="" />
        <div className="container-livro-info">
          <div>
            <p className="titulo-livro">A revolução dos bichos</p>
            <span className="autor-livro">George Orwell</span>
          </div>

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
      </div>
    </Container>
  );
}
