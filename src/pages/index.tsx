import Head from 'next/head';

import { ServiceCards } from '@/components/ServiceCards/ServiceCards';

const Home = () => (
  <>
    <Head>
      <title>Avalon Innovations</title>
    </Head>

    <ServiceCards />
  </>
);

export default Home;
