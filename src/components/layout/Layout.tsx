import { FC, PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';

import Header from './header/Header';
import Meta from '../seo/Meta';

import { IMeta } from '../seo/meta.interface';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--poppins',
});

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
      </div>
    </Meta>
  );
};

export default Layout;
