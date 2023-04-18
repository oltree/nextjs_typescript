import { FC, PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';

import Header from './header/Header';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--poppins',
});

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={poppins.variable}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
