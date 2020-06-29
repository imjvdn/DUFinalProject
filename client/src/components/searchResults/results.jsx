import React from "react";
import { Row, Col } from 'react-bootstrap';

function ResultsCard({ name, type, savedEvent }) {
  if (!savedEvent) {
    return (
      <div className="article">
        <li className="search-list list-group-item">
          <Row>
            <Col size="8">
              <Row>
              <h4>
                Name: {name}
              </h4>
            </Row>
            <Row>
              <h4>
                Type: {type}
              </h4>
              </Row>
            </Col>
          </Row>
        </li>
      </div>
    )
  }
  return (
    <div>
      <li className="search-list list-group-item">
        <Row>
          <Col>
            <Row>
              <h3>
                Name: {name}
              </h3>
            </Row>
            <Row>
              <h3>
                Type: {type}
              </h3>
            </Row>
          </Col>
        </Row>
      </li>
    </div>
  )
}

export default ResultsCard;