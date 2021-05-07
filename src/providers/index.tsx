import React from 'react';
import { InitialProps } from '../interfaces/props';
import MuiProvider from './material-ui';
import ReduxProvider from './redux';

const Providers = combineProviders(ReduxProvider, MuiProvider);

function combineProviders(...providers: React.FC[]) {
  return ({ children }: InitialProps): JSX.Element => {
    return (
      <>
        {providers.reduce(
          (child, Provider) => (
            <Provider>{child}</Provider>
          ),
          children
        )}
      </>
    );
  };
}

export default Providers;
