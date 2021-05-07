import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/layout/Layout';
import Providers from '../providers';

import '../assets/css/styles.css';

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </React.Fragment>
  );
};

export default MyApp;
