import { combineReducers } from 'redux';

const name = (state = "", action) => {
  switch (action.type) {
    case 'GET_NAME':
      return action.type;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  name
});

export default rootReducer;