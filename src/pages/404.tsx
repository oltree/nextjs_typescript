import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout title="Not found">
      <div style={{ textAlign: 'center' }}>
        <Image
          priority
          src="/404.png"
          alt="404 page not found"
          width={512}
          height={512}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
