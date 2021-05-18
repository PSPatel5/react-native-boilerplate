import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './RootReducer';

const createAppropriateStore = (rootReducer: any) => {
  const middleware = [];
  const enhancers = [];

  // Connect the thunk to the redux store
  middleware.push(thunk);

  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(rootReducer, compose(...enhancers));

  return store;
};

export const ReduxStore = createAppropriateStore(rootReducer);
