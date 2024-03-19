import React, { useContext } from "react";
import { Row, Col, Spinner, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AlertContext from "../../context/alert/alertContext";
import MovieContext from "../../context/movie/movieContext";

const MovieSearch = () => {
  const movieContext = useContext(MovieContext);
  const alertContext = useContext(AlertContext);
  const { searchMovie, loading, setText, text } = movieContext;
  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "warning");
    } else {
      searchMovie(text);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Card>
      <Card.Body className="p-4 m-0">
        <form onSubmit={onSubmit}>
          <Row>
            <Col
              lg={9}
              md={8}
              sm={6}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search movie..."
                name="text"
                value={text}
                onChange={onChange}
                required
              />
            </Col>
            <Col
              lg={3}
              md={4}
              sm={6}
            >
              <Button
                variant="primary"
                type="submit"
                className={(loading ? "disabled " : "") + "w-100"}
              >
                <span className="me-1">
                  {loading ? (
                    <Spinner
                      animation="border"
                      size="sm"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faSearch} />
                  )}
                </span>
                Search
              </Button>
            </Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
  );
};

export default MovieSearch;
