import Image from 'next/image';
import { Container } from './style';
import { Rating } from 'react-simple-star-rating';
import Link from 'next/link';
import { IRating } from '@/interface/IRating';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function CardAvaliacaoUsuario({ description, created_at, rate, user }: IRating) {
  const distanceToNow = dayjs(created_at).fromNow();

  return (
    <Container>
      <div className="container-avaliacao">
        <Link href={'/perfil'} className="avatar">
          <Image width={40} height={40} src={user.avatar_url} alt="" />
        </Link>
        <div style={{ flex: 1 }}>
          <Link href={'/perfil'} className="nome-usuario" onClick={(e) => e.stopPropagation()}>
            {user.name}
          </Link>
          <br />
          <span className="data-usuario">{distanceToNow}</span>
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

      <p className="descricao-livro">{description}</p>
    </Container>
  );
}
