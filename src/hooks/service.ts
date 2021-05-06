import React from 'react';

type ServiceState = {
  data?: any[];
  error?: any;
  loading?: boolean;
};

type ServiceHooks = ServiceState & {
  mutate: <T extends any>(...args: T[]) => void;
};

type ServiceFetcher = <T extends any>(...args: T[]) => Promise<any>;

const initState: ServiceState = {
  data: [],
  error: undefined,
  loading: true
};

const reducer = (
  state = initState,
  actions: { type: string; payload?: any }
) => {
  console.log(actions);
  switch (actions.type) {
    case 'FETCH_DATA':
      return { ...state, data: actions.payload, loading: false };
    case 'CATCH_ERROR':
      return { ...state, error: actions.payload, loading: false };
    case 'RESET_LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

function useService(fetcher: ServiceFetcher): ServiceHooks {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const mutate = <T>(...args: T[]) => {
    dispatch({ type: 'RESET_LOADING' });

    fetcher(...args)
      .then(res => {
        dispatch({ type: 'FETCH_DATA', payload: res.data });
        return res;
      })
      .catch(error => {
        dispatch({ type: 'CATCH_ERROR', payload: error });
        return error;
      });
  };

  return { ...state, mutate };
}

export default useService;
