import { ThemeControl } from '@/components/ThemeControl/ThemeControl';

import { Router } from '../Router';

import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className="visually-hidden">Star Wars - Demo Project</h1>
        <ThemeControl />
      </header>

      <main className={styles.main}>
        <Router />
      </main>

      <footer className={styles.footer}>
        <div className={styles.copyrights}>@2023 - Roman Trukhtanov</div>
      </footer>
    </div>
  );
}
