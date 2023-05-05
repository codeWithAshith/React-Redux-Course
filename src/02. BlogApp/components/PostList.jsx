import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h3>PostList</h3>
        <div>
          {this.props.posts &&
            this.props.posts.map((post) => {
              return <p>{post.title}</p>;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
