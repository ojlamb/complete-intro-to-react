// @flow
<<<<<<< HEAD

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

=======
import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

>>>>>>> v3-11
const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
<<<<<<< HEAD
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
=======
    return Object.assign({}, state, {[action.payload.imdbID]: action.payload});
>>>>>>> v3-11
  }
  return state;
};

<<<<<<< HEAD
const rootReducer = combineReducers({ searchTerm, apiData });
=======
const rootReducer = combineReducers ({
  searchTerm: searchTerm,
  apiData: apiData
})
>>>>>>> v3-11

export default rootReducer;
