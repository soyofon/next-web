import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@material-ui/core';
import { useBreadcrumbs } from '../../hooks/breadcrumbs';
import NextLink from '../NextLink';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <MuiBreadcrumbs aria-label="breadcrumbs">
      {breadcrumbs.map((breadcrumb, key) => {
        const last = breadcrumbs.length - 1;
        if (key === last) {
          return <Typography key={key}>{breadcrumb.name}</Typography>;
        } else {
          return (
            <NextLink key={key} href={breadcrumb.path}>
              {breadcrumb.name}
            </NextLink>
          );
        }
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
