import Head from 'next/head';
import { ReactNode } from 'react';

import styles from '../styles/Layout.module.css';

interface LayoutProps {
  title: string | 'areHouse for renting independently';
  description?:
    | string
    | 'Independently put your property up for rent in the UK';
  keywords?: string;
  children: ReactNode;
}

const Layout = ({ title, description, keywords, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
