import { Provider } from 'react-redux';
import { InitialProps } from '../interfaces/props';
import { store } from '../utils/store';

const ReduxProvider = ({ children }: InitialProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
