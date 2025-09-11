import { DetalheLivro } from '@/components/DetalheLivro';
import { Header } from '@/components/Header';
import { globalStyles } from '@/styles/global';
import { Container } from '@/styles/page';
import type { AppProps } from 'next/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showHeader = (Component as any).showHeader !== false;

  return (
    <Container>
      {showHeader && <Header />}

      <Component {...pageProps} />

      <DetalheLivro />
    </Container>
  );
}
