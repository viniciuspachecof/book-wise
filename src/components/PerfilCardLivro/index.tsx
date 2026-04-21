import Image from 'next/image';
import { Container, ContainerLivro } from './style';
import { Rating } from 'react-simple-star-rating';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import { IRating } from '@/interface/IRating';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function PerfilCardLivro({ rate, description, created_at, book }: IRating) {
  const { onDisplayDetails } = useContext(BookWiseContext);
  const distanceToNow = dayjs(created_at).fromNow();

  return (
    <Container onClick={() => onDisplayDetails(true, book.id)}>
      <p className="titulo-postagem">{distanceToNow}</p>
      <ContainerLivro>
        <div className="container-livro">
          <Image width={108} height={152} src={book.cover_url} alt="" />
          <div className="container-livro-info">
            <div>
              <p className="titulo-livro">{book.name}</p>
              <span className="autor-livro">{book.author}</span>
            </div>

            <Rating
              initialValue={rate}
              readonly={true}
              fillColor="#a78bfa"
              emptyColor="transparent"
              SVGstrokeColor="#a78bfa"
              SVGstorkeWidth={2}
              size={18}
            />
          </div>
        </div>
        <div className="descricao-livro">{book.summary}</div>
      </ContainerLivro>
    </Container>
  );
}
