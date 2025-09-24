import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import { IBook } from '@/interface/IBook';

export function ExplorarCardLivro({ id, name, author, cover_url }: IBook) {
  const { onDisplayDetails } = useContext(BookWiseContext);

  return (
    <Container onClick={() => onDisplayDetails(true, id)}>
      <div className="container-livro">
        <Image src={cover_url} width={108} height={158} alt="" />
        <div className="container-livro-info">
          <div>
            <p className="titulo-livro">{name}</p>
            <span className="autor-livro">{author}</span>
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
