import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/**
 * Create redux store and apply middlewares
 * @return {object} returns the store with all middleware applied
 */
export default () => {
  let middleware = null;
  const preloaded = window.INITIAL_STATE || {};
  delete window.INITIAL_STATE;

  // Enable thunks middleare and redux dev tools extension only on development mode
  if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(thunk);

    // Enable redux devtool if browser extension is installed
    /* eslint-disable */
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      );
    }
    /* eslint-enable */
  } else {
    // Just apply thunk middleware
    middleware = applyMiddleware(thunk);
  }

  return createStore(reducers, preloaded, middleware);
};
