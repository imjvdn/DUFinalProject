import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function ResultsRestaurant({ name, type, savedRestaurant, deleteEvent, url, link, id }) {
  return (
    <div className="result-div">
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
            <button className="getReservations"><a href={url} target="_blank">Make Reservations</a></button>
          </Col>
          <SaveBtn
            id={id}
            onClick={savedRestaurant}
          >Save
          </SaveBtn>
        </Row>
      </li>
    </div>
  )
}

export default ResultsRestaurant;