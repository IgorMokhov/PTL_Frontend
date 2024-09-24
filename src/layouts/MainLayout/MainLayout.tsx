import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Container } from '../../components/Container/Container';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_sidebar}>
        <Sidebar />
      </div>
      <div className={styles.layout_header}>
        <Header />
      </div>
      <main className={styles.layout_main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
