import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>areHouse</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/houses'>
              <a>houses</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
