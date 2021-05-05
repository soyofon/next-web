import { AppProps } from 'next/app';
import Head from 'next/head';

import React from 'react';
import Layout from '../components/layout/Layout';

export interface IAppProps extends AppProps {}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>NEXT WEBSITE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </React.Fragment>
  );
};

export default MyApp;
