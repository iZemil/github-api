export const changeName = (name) => ({
  type: "CHANGE_NAME",
  name
});

export const fetchIssues = (data) => ({
  type: "FETCH_ISSUES",
  data
});

export const getRepos = (data) => ({
  type: "GET_REPOS",
  data
});