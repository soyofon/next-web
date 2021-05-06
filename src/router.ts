export type RouterConfig = {
  [key: string]: RouterOptions;
};

export type RouterOptions = {
  name: string;
  children?: RouterConfig;
};

export type RouterOptionsWithPath = RouterOptions & {
  path: string;
};

export const routes: RouterConfig = {
  '/': {
    name: 'HOME'
  },
  '/works': {
    name: 'WORKS',
    children: {
      '/react': {
        name: 'REACT'
      }
    }
  }
};
