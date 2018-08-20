// @flow

<<<<<<< HEAD
import { createStore, compose, applyMiddleware } from 'redux'; // add applyMiddleware
import thunk from 'redux-thunk'; // import
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), // middleware
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);
=======
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // import
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk),
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() :
  f => f
));
>>>>>>> v3-11

export default store;
