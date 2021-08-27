const INITIAL_STATE = {
  show: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING_FETCHED':
      return { ...state, show: action.payload };
    default:
      return state;
  }
};