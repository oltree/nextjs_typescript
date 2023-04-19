import type { AppProps } from 'next/app';

import AuthProvider from '@/providers/AuthProvider';
import { ComponentAuth } from '@/types/page';

import '@/styles/globals.scss';

type App = AppProps & ComponentAuth;

export default function App({ Component, pageProps }: App) {
  return (
    <AuthProvider Component={Component}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
