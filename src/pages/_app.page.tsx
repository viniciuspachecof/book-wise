import '../lib/dayjs';

import { DetalheLivro } from '@/components/DetalheLivro';
import { Header } from '@/components/Header';
import { BookWiseContextProvider } from '@/contexts/BookWiseContext';
import { globalStyles } from '@/styles/global';
import { Container } from '@/styles/page';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react';

globalStyles();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showHeader = (Component as any).showHeader !== false;

  return (
    <SessionProvider session={session}>
      <BookWiseContextProvider>
        <Container>
          {showHeader && <Header />}

          <Component {...pageProps} />

          <DetalheLivro />
        </Container>
      </BookWiseContextProvider>
    </SessionProvider>
  );
}
