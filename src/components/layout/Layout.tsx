import React from 'react';
import { InitialProps } from '../../interfaces/props';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './BreadCrumbs';
import { Box } from '@material-ui/core';

const Layout = ({ children }: InitialProps) => (
  <Box p={0} m={0}>
    <Header />
    <Box>
      <Breadcrumbs />
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;
