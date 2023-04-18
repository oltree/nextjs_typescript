import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { IMeta } from './meta.interface';

const getTitle = (title: string) => `${title} | Hello World`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta
              name="description"
              content={description}
            />
            <meta
              name="og:title"
              content={getTitle(title)}
            />
            <link
              rel="og:description"
              href={description}
            />
          </>
        ) : (
          <meta
            name="robots"
            content="noindex, nofollow"
          />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
