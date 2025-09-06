import Image from 'next/image';
import { Container, ContainerSideBar, ContainerUser } from './style';
import logoImg from '@/assets/logo-book-wise.svg';
import avatarUsuarioImg from '@/assets/avatar-usuario.svg';
import { BinocularsIcon, ChartLineUpIcon, SignInIcon, SignOutIcon, UserIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const isLogado = true;
  const pathName = usePathname();

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
          {isLogado && (
            <Link href={'/perfil'} className={pathName === '/perfil' ? 'active' : ''}>
              <UserIcon size={24} /> Perfil
            </Link>
          )}
        </nav>

        <ContainerUser logado={isLogado}>
          {isLogado && <Image src={avatarUsuarioImg} alt="" />}
          {isLogado ? <span>Usuário</span> : <span>Fazer Login</span>}
          {isLogado ? (
            <button>
              <SignOutIcon size={20} />
            </button>
          ) : (
            <button>
              <SignInIcon size={20} />
            </button>
          )}
        </ContainerUser>
      </ContainerSideBar>
    </Container>
  );
}
