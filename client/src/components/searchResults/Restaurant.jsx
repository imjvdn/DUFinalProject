import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function ResultsRestaurant({ name, type, savedRestaurant, deleteEvent, url, link, id }) {
  return (
    <div className="result-div">
      <li className="search-list list-group-item">
        <Row id={name + "Card"} key={id}>
          <Col>
            <Row id={name + "Card"} key={id}>
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
            onClick = {() => savedRestaurant(id)}
          >Save
          </SaveBtn>
        </Row>
      </li>
    </div>
  )
}

export default ResultsRestaurant;