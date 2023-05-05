import _ from "lodash";

import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

// npm i lodash
export const fetchUser = (id) => {
  return _.memoize(async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  });
};
