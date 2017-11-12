import { combineReducers } from 'redux';

const user = (state = "", action) => {
  switch (action.type) {
    case 'GET_NAME':
      return action.type;
    default:
      return state;
  }
}

const issues = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ISSUES':
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  issues
});

export default rootReducer;