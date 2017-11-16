import { combineReducers } from 'redux';

const user = (state = {
  input_name: '',
  data: {
    isFetching: false
  },
  repos: []
}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        input_name: action.name
      }
    case 'FETCH_USER_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          isFetching: true,
          login: action.data.login,
          avatar_url: action.data.avatar_url,
          url: action.data.url,
          name: action.data.name,
          public_repos: action.data.public_repos
        }
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

const issues = (state = {
  perPage: 30,
  list: null
}, action) => {
  switch (action.type) {
    case 'FETCH_ISSUES':
      return {
        ...state,
        list: action.data.slice(0, state.perPage)
      }
    case 'CHANGE_ISSUES_PER_PAGE':
      return {
        ...state,
        perPage: action.num
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  issues
});

export default rootReducer;