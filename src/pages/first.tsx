import Head from 'next/head';

import styles from '@/styles/Pages/First.module.scss';

const First = () => (
  <>
    <Head>
      <title>First</title>
    </Head>
    <h2 className={styles.title}>First!</h2>
  </>
);

export default First;
