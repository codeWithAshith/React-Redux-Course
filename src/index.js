import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BlogApp from "./02. BlogApp/BlogApp";
import reducers from "./02. BlogApp/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <BlogApp />
    </Provider>
  </React.StrictMode>
);
