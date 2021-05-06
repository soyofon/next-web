import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';
import { InitialProps } from '../interfaces/props';

export interface NextLinkProps extends InitialProps {
  href: string;
}

const NextLink = ({ children, href }: NextLinkProps) => {
  return (
    <Link href={href} passHref>
      <MuiLink>{children}</MuiLink>
    </Link>
  );
};

export default NextLink;
