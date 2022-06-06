import { isDarkMode } from '../helpers/isDarkMode';

const displayReducer = (
  state = 'dark',
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'TOGGLE_DISPLAY_MODE':
      return isDarkMode(state) ? 'light' : 'dark';
    default:
      return state;
  }
};

export default displayReducer;
