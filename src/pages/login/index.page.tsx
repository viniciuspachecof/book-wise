import Image from 'next/image';
import { Container } from './style';
import logo from '@/assets/logo-book-wise.svg';
import iconeGoogle from '@/assets/icone-google.svg';
import iconeGithub from '@/assets/icone-github.svg';
import iconeRocket from '@/assets/icone-rocket.svg';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();

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
            <button className="link">
              <Image src={iconeGoogle} alt="" /> Entrar com Google
            </button>

            <button className="link">
              <Image src={iconeGithub} alt="" /> Entrar com GitHub
            </button>

            <button
              className="link"
              onClick={() => {
                router.push('/');
              }}
            >
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
