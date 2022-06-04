const displayReducer = (
  state = 'dark',
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'TOGGLE_DISPLAY_MODE':
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
};

export default displayReducer;
