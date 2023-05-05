import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

const PostList = () => {
  useEffect(() => {
    console.log(fetchPost());
  });

  return <div>PostList</div>;
};

export default connect(null, { fetchPost: fetchPost })(PostList);
