import { combineReducers } from 'redux';
import pgCollection from './pgCollection.reducer';

const rootReducer = combineReducers({
  pgCollection,
});

export default rootReducer;
