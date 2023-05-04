import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "ABC", duration: "3.34" },
    { title: "FGD", duration: "2.34" },
    { title: "GSD", duration: "3.44" },
    { title: "DFS", duration: "6.34" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectecdSong: selectedSongReducer,
});
