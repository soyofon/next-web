import { ThemeProvider } from '@material-ui/styles';
import { InitialProps } from '../interfaces/props';
import theme from '../theme';

const MuiProvider = ({ children }: InitialProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiProvider;
