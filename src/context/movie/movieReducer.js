import {
  SET_TEXT,
  SEARCH_LOADING,
  SEARCH_MOVIE,
  GET_MOVIE,
  GET_MOVIE_ERROR,
  CLEAR_MOVIE,
  GET_TRAILER,
  GET_TRAILER_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };

    case GET_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
        movies: {
          Search: [],
          totalResults: "0",
          Response: "False"
        },
        loading: false
      };

    case GET_TRAILER:
      return {
        ...state,
        trailer: action.payload,
        loading: false
      };

    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
        loading: false
      };

    case GET_TRAILER_ERROR:
      return {
        ...state,
        trailer: null,
        loading: false
      };

    default:
      return state;
  }
};
