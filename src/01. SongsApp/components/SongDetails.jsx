import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  if (!props.song) {
    return (
      <div>
        <p>Please Select a Song</p>
      </div>
    );
  }

  return (
    <div>
      <h4>SongDetails</h4>
      <p>Title : {props.song.title}</p>
      <p>Duration : {props.song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
