import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPost = () => {
  // bad way, we require middleware
  const promise = jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: promise,
  };
};
