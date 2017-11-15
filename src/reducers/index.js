import { combineReducers } from 'redux';

const user = (state = {
  name: 'twbs',
  repos: []
}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.data
      }
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