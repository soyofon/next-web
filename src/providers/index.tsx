import React from 'react';
import { InitialProps } from '../interfaces/props';
import MuiProvider from './material-ui';

const Providers = ({ children }: InitialProps) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export const combineProvider = (...providers: React.FC[]) => {};

export default Providers;
