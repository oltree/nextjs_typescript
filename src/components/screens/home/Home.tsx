import { FC } from 'react';

import Layout from '@/components/layout/Layout';

import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Layout title="Home page">
      <h1>Hello world</h1>
    </Layout>
  );
};

export default Home;
