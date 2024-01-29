import { ADD_FAVOURITE_SONG, PLAY_SONG, REMOVE_FAVOURITE_SONG } from "../actions/actions";

export default function singleSongReducer(state = {}, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        songPlaying: [action.payload]
      };
    case ADD_FAVOURITE_SONG:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs, action.payload]
      };
    case REMOVE_FAVOURITE_SONG:
      return {
        ...state,
        favouriteSongs: [
          ...state.favouriteSongs.filter((f) => f.title !== action.payload.title)
        ],
      };
    default:
      break;
  }
  return state;
}
