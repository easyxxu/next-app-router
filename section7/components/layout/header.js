import Link from 'next/link';
import classes from './header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <h1>
        <Link href={{ pathname: '/' }}> Events</Link>
      </h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/events">All Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
