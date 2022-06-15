import Head from 'next/head';

import { ServiceCards } from '@/components/ServiceCards/ServiceCards';

const Home = () => {
  return (
    <>
      <Head>
        <title>Avalon Innovations</title>
      </Head>

      <ServiceCards />
    </>
  );
};

export default Home;
