import { UPDATE_FILTER } from '../actions/index';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.data;
    default:
      return state;
  }
};

export default filterReducer;
