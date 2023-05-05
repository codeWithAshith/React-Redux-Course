import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import PostList from "./components/PostList";
import reducers from "./reducers";

const BlogApp = () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <div>
        <PostList />
      </div>
    </Provider>
  );
};

export default BlogApp;
