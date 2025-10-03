import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import { IBook } from '@/interface/IBook';

export function InicioCardLivroPopular({ id, name, author, cover_url, mediaRate }: IBook) {
  const { onDisplayDetails } = useContext(BookWiseContext);

  return (
    <Container onClick={() => onDisplayDetails(true, id)}>
      <div className="container-livro">
        <Image width={64} height={94} src={cover_url} alt="" />
        <div className="container-livro-info">
          <div>
            <p className="titulo-livro">{name}</p>
            <span className="autor-livro">{author}</span>
          </div>

          <Rating
            initialValue={mediaRate}
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
