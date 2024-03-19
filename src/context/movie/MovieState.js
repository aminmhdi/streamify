import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import movieReducer from "./movieReducer";
import {
  SEARCH_LOADING,
  SET_TEXT,
  SEARCH_MOVIE,
  GET_MOVIE,
  GET_MOVIE_ERROR,
  CLEAR_MOVIE,
  GET_TRAILER,
  GET_TRAILER_ERROR
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: { Search: null, totalResults: "0", Response: "True" },
    movie: null,
    trailer: null,
    loading: false,
    error: null,
    text: ""
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const ApiKey = process.env.REACT_APP_OMDB_API_KEY;

  // Search Movie
  const searchMovie = async (text) => {
    searchLoading();
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${text}&apikey=${ApiKey}`
      );
      if (res.data.Response === "True") {
        dispatch({ type: SEARCH_MOVIE, payload: res.data });
      } else {
        dispatch({ type: GET_MOVIE_ERROR, payload: res.data.Error });
      }
    } catch (error) {
      dispatch({
        type: GET_MOVIE_ERROR,
        payload: "An error occured: " + error.message
      });
    }
  };

  // search loading
  const searchLoading = () => {
    dispatch({ type: SEARCH_LOADING });
  };

  // Clear Movie
  const clearMovie = () => {
    dispatch({ type: CLEAR_MOVIE });
  };

  // Set Text
  const setText = (text) => {
    console.log(text);
    dispatch({ type: SET_TEXT, payload: text });
  };

  // Get Movie
  const getMovie = async (id) => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${ApiKey}`
      );
      if (res.data.Response === "True") {
        dispatch({ type: GET_MOVIE, payload: res.data });
      } else {
        dispatch({ type: GET_MOVIE_ERROR, payload: res.data.Error });
      }
    } catch (error) {
      dispatch({
        type: GET_MOVIE_ERROR,
        payload: "An error occured: " + error.message
      });
    }
  };

  // Get Trailer
  const getTrailer = async (id) => {
    try {
      const res = await axios.get(
        `https://api.kinocheck.de/movies?imdb_id=${id}`
      );
      if (res.data) {
        dispatch({ type: GET_TRAILER, payload: res.data.trailer });
      } else {
        dispatch({ type: GET_TRAILER_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_TRAILER_ERROR });
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        error: state.error,
        trailer: state.trailer,
        text: state.text,
        setText,
        searchLoading,
        searchMovie,
        getMovie,
        getTrailer,
        clearMovie
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
