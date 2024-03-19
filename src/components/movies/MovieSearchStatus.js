import React from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const MovieSearchStatus = (props) => {
  return (
    <Row>
      <Col
        sm={12}
        className="my-3"
      >
        <Card>
          <Card.Body className="p-3">
            <Alert
              variant={props.variant}
              className="m-0 text-center"
            >
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-1">{props.message}</span>
            </Alert>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieSearchStatus;
