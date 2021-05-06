import React from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { InitialProps } from '../../interfaces/props';

const useStyles = makeStyles({
  root: {
    background: 'white',
    color: '#666'
  },
  link: {
    color: '#666',
    '&:hover': {
      color: 'black',
      textDecoration: 'none'
    },
    '&:visit': {
      color: '#666'
    }
  }
});

export interface IHeaderProps extends InitialProps {}

const Header = ({ children }: IHeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Link href="/" passHref>
          <MuiLink className={classes.link}>
            <Typography variant="h6">NEXT WEB</Typography>
          </MuiLink>
        </Link>
      </Toolbar>
      {children}
    </AppBar>
  );
};

export default Header;
