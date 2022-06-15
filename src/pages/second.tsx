import Head from 'next/head';

import { TestComponent } from '@/components/TestComponent/TestComponent';
import styles from '@/styles/pages/Second.module.scss';

const Second = () => (
  <>
    <Head>
      <title>Second</title>
    </Head>

    <h2 className={styles.title}>Second!</h2>

    <TestComponent />
  </>
);

export default Second;
