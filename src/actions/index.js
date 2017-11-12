export const getName = () => ({
  type: "GET_NAME"
});

export const fetchIssues = (data) => ({
  type: "FETCH_ISSUES",
  data
});