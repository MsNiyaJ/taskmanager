const displayReducer = (
  state = 'dark',
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'SET_DISPLAY_MODE':
      return action.payload;
    default:
      return state;
  }
};

export default displayReducer;
