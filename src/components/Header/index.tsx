import Image from 'next/image';
import { Container, ContainerSideBar, ContainerUser } from './style';
import logoImg from '@/assets/logo-book-wise.svg';
import avatarUsuarioImg from '@/assets/avatar-usuario.png';
import { BinocularsIcon, ChartLineUpIcon, SignInIcon, SignOutIcon, UserIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function Header() {
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';
  const pathName = usePathname();
  const router = useRouter();

  const primeiroNome = session.data?.user.name.split(' ')[0];

  return (
    <Container>
      <ContainerSideBar>
        <Image src={logoImg} alt="" />

        <nav className="menu">
          <Link href={'/'} className={pathName === '/' ? 'active' : ''}>
            <ChartLineUpIcon size={24} /> Início
          </Link>
          <Link href={'/explorar'} className={pathName === '/explorar' ? 'active' : ''}>
            <BinocularsIcon size={24} /> Explorar
          </Link>
          {isSignedIn && (
            <Link href={`/perfil/${session.data?.user.id}`} className={pathName.includes('/perfil') ? 'active' : ''}>
              <UserIcon size={24} /> Perfil
            </Link>
          )}
        </nav>

        <ContainerUser logado={isSignedIn}>
          {isSignedIn && (
            <Image width={32} height={32} src={session.data?.user.avatar_url ?? avatarUsuarioImg} alt="" />
          )}
          {isSignedIn ? (
            <span className="nome-usuario">{primeiroNome}</span>
          ) : (
            <span className="nome-login">Fazer Login</span>
          )}
          {isSignedIn ? (
            <button onClick={() => signOut({ callbackUrl: '/' })}>
              <SignOutIcon size={20} />
            </button>
          ) : (
            <button onClick={() => router.push('/login')}>
              <SignInIcon size={20} />
            </button>
          )}
        </ContainerUser>
      </ContainerSideBar>
    </Container>
  );
}
