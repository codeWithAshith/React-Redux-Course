import React, { Component } from "react";

export class UserHeader extends Component {
  componentDidMount() {
    console.log(this.props.userId);
  }
  render() {
    return <div>UserHeader</div>;
  }
}

export default UserHeader;
