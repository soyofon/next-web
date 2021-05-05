import React from 'react';
import { InitialProps } from '../../interfaces/props';

export interface IHeaderProps extends InitialProps {}

const Header = ({ children }: IHeaderProps) => {
  return <>{children}</>;
};

export default Header;
