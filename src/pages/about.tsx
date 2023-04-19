import Layout from '@/components/layout/Layout';

import { useRouter } from 'next/router';
import { NextPageAuth } from '@/types/page';

const About: NextPageAuth = () => {
  const { push, replace } = useRouter();

  return (
    <Layout title="about us">
      <h2>About</h2>
      <button onClick={() => push('/')}>back</button>
      <button onClick={() => replace('/')}>back</button>
    </Layout>
  );
};

About.isOnlyUser = true;

export default About;
