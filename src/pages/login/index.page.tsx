import Image from 'next/image';
import { Container } from './style';
import logo from '@/assets/logo-book-wise.svg';
import iconeGoogle from '@/assets/icone-google.svg';
import iconeGithub from '@/assets/icone-github.svg';
import iconeRocket from '@/assets/icone-rocket.svg';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

function Login() {
  const router = useRouter();
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';

  async function handleAcessarVisitante() {
    if (isSignedIn) {
      await signOut();
    } else {
      router.push('/');
    }
  }

  return (
    <Container>
      <div className="background">
        <div className="cor-fundo">
          <Image width={232} src={logo} alt="" />
        </div>
      </div>
      <div className="login-acesso">
        <div>
          <p>Boas vindas!</p>
          <span>Faça seu login ou acesse como visistante.</span>

          <div className="container-links">
            <button className="link" onClick={() => signIn('google', { callbackUrl: '/' })}>
              <Image src={iconeGoogle} alt="" /> Entrar com Google
            </button>

            <button className="link" onClick={() => signIn('github', { callbackUrl: '/' })}>
              <Image src={iconeGithub} alt="" /> Entrar com GitHub
            </button>

            <button className="link" onClick={handleAcessarVisitante}>
              <Image src={iconeRocket} alt="" /> Acessar como visitante
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

Login.showHeader = false;

export default Login;
