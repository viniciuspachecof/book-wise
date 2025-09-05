import Image from 'next/image';
import { Container, ContainerLivro } from './style';
import { Rating } from 'react-simple-star-rating';
import imgLivroRecente from '@/assets/inicio-livro-recente.svg';

export function PerfilCardLivro() {
  return (
    <Container>
      <p className="titulo-postagem">Há 2 dias</p>
      <ContainerLivro>
        <div className="container-livro">
          <Image src={imgLivroRecente} alt="" />
          <div className="container-livro-info">
            <p className="titulo-livro">A revolução dos bichos</p>
            <span className="autor-livro">George Orwell</span>

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
        </div>
        <div className="descricao-livro">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae
          mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique
          pretium quam. Mollis et luctus amet sed convallis varius massa sagittis. Proin sed proin at leo quis ac sem.
        </div>
      </ContainerLivro>
    </Container>
  );
}
