import POPULATE_TABLE from '../actions/index';

const INITIAL_STATE = [];

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_TABLE:
      return action.data;
    default:
      return [...state];
  }
};

export default tableReducer;
