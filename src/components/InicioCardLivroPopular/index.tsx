import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroPopular from '@/assets/inicio-livro-popular.svg';

export function InicioCardLivroPopular() {
  return (
    <Container>
      <div className="container-livro">
        <Image src={imgLivroPopular} alt="" />
        <div className="container-livro-info">
          <p className="titulo-livro">A revolução dos bichos</p>
          <span className="autor-livro">George Orwell</span>

          <Rating
            onClick={() => console.log('alterou')}
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
