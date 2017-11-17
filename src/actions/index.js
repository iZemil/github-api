export const changeName = (name) => ({
  type: "CHANGE_NAME",
  name
});

export const fetchIssues = (data, repoName) => ({
  type: "FETCH_ISSUES",
  data,
  repoName
});

export const getRepos = (data) => ({
  type: "GET_REPOS",
  data
});

export const changeIssuesPerPage = (num) => ({
  type: "CHANGE_ISSUES_PER_PAGE",
  num
});

export const fetchUserData = (data) => ({
  type: "FETCH_USER_DATA",
  data
});

export const changeActiveIssue = (num) => ({
  type: "CHANGE_ACTIVE_ISSUE",
  num
});