import React from 'react';
import { InitialProps } from '../../interfaces/props';

export interface IHeaderProps extends InitialProps {}

const Footer = ({ children }: IHeaderProps) => {
  return <>{children}</>;
};

export default Footer;
