import Link from 'next/link';

import styles from '@/components/base/Header/Header.module.scss';
import { SvgInline } from '@/components/SvgInline/SvgInline';

import { Button } from '../Button/Button';

export const Header = () => (
  <header className={styles['site-header']}>
    <div className={`${styles['header-wrapper']} container`}>
      <Link href="/">
        <a className={styles.brand}>
          <SvgInline name="logo" width="249" height="46" />
        </a>
      </Link>

      <nav className={styles.nav}>
        <button className={styles.toggle} aria-expanded="false" type="button">
          menu
        </button>

        <ul className={`${styles['nav-wrapper']} paragraph2`}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link href="/">Services</Link>
          </li>

          <li className={styles.item}>
            <Link href="/">Work</Link>
          </li>

          <li className={styles.item}>
            <Link href="/">About</Link>
          </li>

          <Button title="Got a Project?" />
        </ul>
      </nav>
    </div>
  </header>
);
