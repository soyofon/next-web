import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const initState = {};

const reducer = (state = initState, actions: any) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
