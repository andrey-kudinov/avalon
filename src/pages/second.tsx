import Head from 'next/head';

import styles from '@/styles/Pages/Second.module.scss';

const Second = () => (
  <>
    <Head>
      <title>Second</title>
    </Head>
    <h2 className={styles.title}>Second!</h2>
  </>
);

export default Second;
