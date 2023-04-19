import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';

import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { push, replace } = useRouter();

  return (
    <Layout title="about us">
      <h2>About</h2>
      <button onClick={() => push('/')}>back</button>
      <button onClick={() => replace('/')}>back</button>
    </Layout>
  );
};

export default About;
