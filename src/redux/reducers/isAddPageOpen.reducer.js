const isAddPageOpen = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_ADD_PAGE':
      return true;
    case 'CLOSE_ADD_PAGE':
      return false;
    case 'TOGGLE_ADD_PAGE':
      return state ? false : true;
    default:
      return state;
  }
};

export default isAddPageOpen;
