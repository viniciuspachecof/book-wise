import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroRecente from '@/assets/inicio-livro-recente.svg';

export function InicioCardLivroUltima() {
  return (
    <Container>
      <div className="container-livro">
        <Image src={imgLivroRecente} alt="" />
        <div>
          <div className="container-avaliacao">
            <span className="data-pub">Há 2 dias</span>
            <Rating
              onClick={() => console.log('alterou')}
              initialValue={1}
              readonly={false}
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
