import { createStore } from 'redux';
import rootReducer from './reducers/_root.reducer';

const storeInstance = createStore(
  // all combined reducers
  rootReducer
);

export { storeInstance };
