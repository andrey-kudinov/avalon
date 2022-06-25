import Link from 'next/link';
import { useState } from 'react';

import styles from '@/components/base/Header/Header.module.scss';
import { SvgInline } from '@/components/SvgInline/SvgInline';

import { Button } from '../Button/Button';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles['header-inner']} container`}>
        <Link href="/">
          <a className={styles.brand}>
            <SvgInline name="logo" width="249" height="46" />
          </a>
        </Link>

        <nav className={styles.nav}>
          <button
            className={styles.toggle}
            aria-expanded={open ? 'false' : 'true'}
            aria-label={open ? 'close menu' : 'menu'}
            type="button"
            onClick={() => setOpen(!open)}
          >
            menu
          </button>

          <ul className={`${styles['nav-wrapper']} paragraph2 ${open ? styles.active : ''}`}>
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
};
