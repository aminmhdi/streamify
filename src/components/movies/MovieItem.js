import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, CardHeader, Card, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <Col
      lg={3}
      md={4}
      sm={6}
      className="p-3"
    >
      {
        <Card>
          <CardHeader className="text-truncate">
            <strong>{movie.Title}</strong>
          </CardHeader>
          <Card.Body className="p-0">
            <div className="position-relative">
              <div className="position-absolute px-2 py-1 movie-type">
                <Badge
                  bg="dark"
                  className="opacity-75"
                >
                  {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                </Badge>
              </div>

              <Image
                className="w-100 object-fit-cover"
                height={200}
                src={
                  movie.Poster == "N/A"
                    ? "https://via.placeholder.com/200"
                    : movie.Poster
                }
                alt={movie.Title}
                style={{ minHeight: "200px" }}
              />
              <div className="position-absolute px-2 py-1 w-100 movie-year">
                {movie.Year}
              </div>
            </div>

            <div className="p-2">
              <Row>
                <Col lg={12}>
                  <div className="d-grid gap-2">
                    <Link
                      to={`/movie/${movie.imdbID}`}
                      className="btn btn-secondary"
                    >
                      <FontAwesomeIcon icon={faEye} /> Watch
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      }
    </Col>
  );
};

export default MovieItem;
