import React from "react";
import { Row, Col } from "react-bootstrap";
import Movies from "../movies/Movies.js";
import MovieSearch from "../movies/MovieSearch.js";

export const Home = () => {
  return (
    <Row>
      <Col lg={12}>
        <MovieSearch />
      </Col>
      <Col lg={12}>
        <Movies />
      </Col>
    </Row>
  );
};

export default Home;
