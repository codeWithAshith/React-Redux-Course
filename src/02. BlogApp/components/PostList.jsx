import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="ui container">
        <h3>PostList</h3>
        <div className="ui relaxed divided list">
          {this.props.posts &&
            this.props.posts.map((post) => {
              return (
                <div className="item" key={post.id}>
                  <i className="large middle aligned icon user"></i>
                  <div className="content">
                    <div className="description">
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                    </div>
                  </div>
                </div>
              );
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
