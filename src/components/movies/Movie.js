import React, { useEffect, useContext } from "react";
import { Row, Card, Col, Image, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MovieContext from "../../context/movie/movieContext";

const Movie = () => {
  const movieContext = useContext(MovieContext);
  const {
    movie,
    getMovie,
    searchLoading,
    loading,
    trailer,
    getTrailer,
    clearMovie
  } = movieContext;
  let { id } = useParams();

  useEffect(() => {
    searchLoading();
    clearMovie();
    getMovie(id);
    getTrailer(id);
    // eslint-disable-next-line
  }, []);

  return !movie || loading ? (
    <Card>
      <Card.Body className="text-center card-body p-5 m-5">
        <Spinner
          animation="border"
          variant="primary"
          role="status"
        />
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between">
          <h3 className="p-0 m-0"> {movie.Title}</h3>
          <Link
            to="/"
            state={{ from: "movie" }}
            className="btn btn-secondary text-end"
          >
            Back
          </Link>
        </div>
      </Card.Header>
      <Card.Body>
        {trailer != null && (
          <Row>
            <Col lg={12}>
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${trailer.youtube_video_id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <hr />
            </Col>
          </Row>
        )}
        <Row>
          <Image
            className="object-fit-cover max-width-350px col-md-6"
            src={movie.Poster}
            alt={movie.Title}
          />
          <Col className="col-md-6 p-3 text-start">
            <div>
              <strong>Year: </strong>
              {movie.Year}
            </div>
            <div>
              <strong>Rated: </strong>
              {movie.Rated}
            </div>
            <div>
              <strong>Released: </strong>
              {movie.Released}
            </div>
            <div>
              <strong>Runtime: </strong>
              {movie.Runtime}
            </div>
            <div>
              <strong>Genre: </strong>
              {movie.Genre}
            </div>
            <div>
              <strong>Director: </strong>
              {movie.Director}
            </div>
            <div>
              <strong>Writer: </strong>
              {movie.Writer}
            </div>
            <div>
              <strong>Actors: </strong>
              {movie.Actors}
            </div>
            <div>
              <strong>Language: </strong>
              {movie.Language}
            </div>
            <div>
              <strong>Country: </strong>
              {movie.Country}
            </div>
            <div>
              <strong>Awards: </strong>
              {movie.Awards}
            </div>
            <div>
              <strong>Metascore: </strong>
              {movie.Metascore}
            </div>
            <div>
              <strong>imdbRating: </strong>
              {movie.imdbRating}
            </div>
            <div>
              <strong>imdbVotes: </strong>
              {movie.imdbVotes}
            </div>
            <div>
              <strong>imdbID: </strong>
              {movie.imdbID}
            </div>
            <div>
              <strong>Type: </strong>
              {movie.Type}
            </div>
            <div>
              <strong>DVD: </strong>
              {movie.DVD}
            </div>
            <div>
              <strong>BoxOffice: </strong>
              {movie.BoxOffice}
            </div>
            <div>
              <strong>Production: </strong>
              {movie.Production}
            </div>
            <div>
              <strong>Website: </strong>
              {movie.Website}
            </div>
          </Col>

          <Col className="col-md-12 p-3 text-start">
            <strong>Plot: </strong>
            {movie.Plot}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Movie;
