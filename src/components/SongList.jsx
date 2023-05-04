import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

const SongList = (props) => {
  return (
    <div className="ui divided list">
      {props.songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => props.selectedSong(song)}
              >
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapsStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapsStateToProps, { selectedSong: selectedSong })(
  SongList
);
