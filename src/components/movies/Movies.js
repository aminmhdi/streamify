import React, { useContext } from "react";
import MovieContext from "../../context/movie/movieContext";
import MovieItem from "./MovieItem";
import { Row } from "react-bootstrap";
import { v4 } from "uuid";
import MovieSearchStatus from "./MovieSearchStatus";

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies, error } = movieContext;

  if (movies.Search == null) {
    return (
      <MovieSearchStatus
        variant="warning"
        message="Fill the form and click on search button to find movies."
      />
    );
  } else if (movies.Response === "False") {
    return (
      <MovieSearchStatus
        variant="danger"
        message={error}
      />
    );
  } else if (movies.Search.length === 0) {
    return (
      <MovieSearchStatus
        variant="warning"
        message={"No Movies Found"}
      />
    );
  }

  return (
    <Row>
      {movies.Search.slice(0, 8).map((movie) => (
        <MovieItem
          key={v4()}
          movie={movie}
        />
      ))}
    </Row>
  );
};

export default Movies;
