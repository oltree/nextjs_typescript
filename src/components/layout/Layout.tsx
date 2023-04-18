import { FC, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';

import Meta from '../seo/Meta';
import Header from './header/Header';

import { IMeta } from '../seo/meta.interface';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--poppins',
});

const DynamicFooter = dynamic(() => import('./footer/Footer'), { ssr: false });

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta
      title={title}
      description={description}
    >
      <div className={poppins.variable}>
        <Header />
        <main>{children}</main>
        <DynamicFooter />
      </div>
    </Meta>
  );
};

export default Layout;
