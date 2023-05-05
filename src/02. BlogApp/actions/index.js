// npm i redux-thunk

import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response,
    });
  };
};
