import '@/styles/index.scss';

import { AppProps } from 'next/app';

import { Page } from '@/components/base/Page';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
