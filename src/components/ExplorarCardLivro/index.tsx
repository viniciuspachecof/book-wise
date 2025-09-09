import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroRecente from '@/assets/inicio-livro-recente.svg';

export function ExplorarCardLivro() {
  return (
    <Container>
      <div className="container-livro">
        <Image src={imgLivroRecente} alt="" />
        <div className="container-livro-info">
          <div>
            <p className="titulo-livro">A revolução dos bichos</p>
            <span className="autor-livro">George Orwell</span>
          </div>

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
