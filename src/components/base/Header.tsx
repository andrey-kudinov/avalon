import Link from 'next/link';

export const Header = () => (
  <header>
    <Link href="/">Logo</Link>
    <nav>
      <ul>
        <li>
          <Link href="/first">First</Link>
        </li>
        <li>
          <Link href="/second">Second</Link>
        </li>
      </ul>
    </nav>
  </header>
);
