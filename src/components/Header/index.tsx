import Image from 'next/image';
import { Container, ContainerSideBar } from './style';
import logoImg from '@/assets/logo-book-wise.svg';
import { BinocularsIcon, ChartLineUpIcon, UserIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export function Header() {
  return (
    <Container>
      <ContainerSideBar>
        <Image src={logoImg} alt="" />

        <nav className="menu">
          <Link className="active" href="">
            <ChartLineUpIcon size={24} /> Início
          </Link>
          <Link href="">
            <BinocularsIcon size={24} /> Explorar
          </Link>
          <Link href="">
            <UserIcon size={24} /> Perfil
          </Link>
        </nav>

        <div className="user">Usuario (icone)</div>
      </ContainerSideBar>
    </Container>
  );
}
