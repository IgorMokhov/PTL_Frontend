import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_sidebar}>
        <Sidebar />
      </div>
      <div className={styles.layout_header}>
        <Header />
      </div>
      <main className={styles.layout_main}>
        <Outlet />
      </main>
    </div>
  );
};
