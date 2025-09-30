import iconeGoogle from '@/assets/icone-google.svg';
import iconeGithub from '@/assets/icone-github.svg';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { Container, Overlay } from './style';
import { useContext } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import { XIcon } from '@phosphor-icons/react';

export function LoginAvaliacao() {
  const { displayRating, onDisplayRating } = useContext(BookWiseContext);

  return (
    <>
      <Overlay open={displayRating} />
      <Container open={displayRating}>
        <div className="container-avaliacao">
          <div className="close">
            <button onClick={() => onDisplayRating(false)}>
              <XIcon size={24} />
            </button>
          </div>

          <p>Faça login para deixar sua avaliação</p>

          <div className="container-links">
            <button className="link" onClick={() => signIn('google', { callbackUrl: '/explorar' })}>
              <Image src={iconeGoogle} alt="" /> Entrar com Google
            </button>
            <button className="link" onClick={() => signIn('github', { callbackUrl: '/explorar' })}>
              <Image src={iconeGithub} alt="" /> Entrar com GitHub
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
