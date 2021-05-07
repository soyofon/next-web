import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { RouterConfig, RouterOptionsWithPath, routes } from '../utils/router';

export const useBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = React.useState<RouterOptionsWithPath[]>(
    []
  );

  React.useEffect(() => {
    let node: RouterConfig = routes;
    const crumbs: RouterOptionsWithPath[] = [];
    const matches = router.route.match(/\/[^\\/]*/g) || [];

    const fetch = matches.every(path => {
      if (node[path]) {
        const last = crumbs[crumbs.length - 1];
        crumbs.push({ ...node[path], path: (last ? last.path : '') + path });
        node = node[path].children || {};

        return true;
      }
      return false;
    });

    if (fetch) {
      setBreadcrumbs(crumbs);
    }
  }, [router]);

  return breadcrumbs;
};
