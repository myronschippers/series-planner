const CreativePanelModel = function (description, type) {
  this.typeOpts = ['4:3', '16:9'];
  this.desc = description;
};
const samplePage = {
  title: 'Sample Page',
  panels: [
    new CreativePanelModel('Mastering a comic panel'),
    new CreativePanelModel('A great display for a comic page panel'),
    new CreativePanelModel('New story step for the most top outcome'),
  ],
};
const defaultState = [samplePage];

const pgCollectionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PG_COLLECTION':
      return action.payload;
    case 'ADD_TO_PG_COLLECTION':
      return [...state, { ...samplePage, ...action.payload }];
    case 'CLEAR_PG_COLLECTION':
      return [];
    default:
      return state;
  }
};

export default pgCollectionReducer;
