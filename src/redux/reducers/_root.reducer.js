import { combineReducers } from 'redux';
import pgCollection from './pgCollection.reducer';
import isAddPageOpen from './isAddPageOpen.reducer';

const rootReducer = combineReducers({
  pgCollection,
  isAddPageOpen,
});

export default rootReducer;
