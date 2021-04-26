import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  title: string | 'areHouse for renting independently';
  description?:
    | string
    | 'Independently put your property up for rent in the UK';
  keywords?: string;
  children: ReactNode;
}

const Layout = ({ title, description, keywords, children }: LayoutProps) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {router.pathname === '/' && <h2>Hero component goes here</h2>}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
