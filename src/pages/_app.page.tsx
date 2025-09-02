import { Header } from '@/components/Header';
import { globalStyles } from '@/styles/global';
import { Container } from '@/styles/page';
import type { AppProps } from 'next/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
