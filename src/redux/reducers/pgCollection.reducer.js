const samplePage = {
  title: 'Sample Page',
};
const defaultState = [samplePage];

const pgCollectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PG_COLLECTION':
      return action.payload;
    case 'ADD_TO_PG_COLLECTION':
      return [...state, action.payload];
    case 'CLEAR_PG_COLLECTION':
      return [];
    default:
      return state;
  }
};

export default pgCollectionReducer;
