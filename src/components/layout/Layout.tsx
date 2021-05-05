import React from 'react';
import { InitialProps } from '../../interfaces/props';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: InitialProps) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
