import Image from 'next/image';
import avatarUsuarioImg from '@/assets/avatar-usuario-livro-avaliacao.svg';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroRecente from '@/assets/inicio-livro-recente.svg';

export function InicioCardLivroRecente() {
  return (
    <Container>
      <div className="container-avaliacao">
        <Image src={avatarUsuarioImg} alt="" />
        <div style={{ flex: 1 }}>
          <p className="nome-usuario">Vinicius</p>
          <span className="data-usuario">Hoje</span>
        </div>
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

      <div className="container-livro">
        <Image src={imgLivroRecente} alt="" />
        <div>
          <p className="titulo-livro">O Hobbit</p>
          <span className="autor-livro">Fulano</span>

          <p className="descricao-livro">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras
            fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </p>
        </div>
      </div>
    </Container>
  );
}
