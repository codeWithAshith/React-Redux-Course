import React from "react";
import { connect } from "react-redux";

const SongList = () => {
  return <div>SongList</div>;
};

const mapsStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapsStateToProps)(SongList);
