import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Rick and Morty Characters</h1>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Characters App
      </footer>
    </div>
  );
};

export default Layout;