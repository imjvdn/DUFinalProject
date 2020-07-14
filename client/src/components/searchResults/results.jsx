import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function ResultsCard({ name, type, saveEvent, deleteEvent, link, id }) {
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
              <button className="getTickets"><a href="https://www.ticketmaster.com/" target="_blank">Purchase Tickets</a></button>
            </Row>
          </Col>
          <SaveBtn
            id={id}
            onClick = {() => saveEvent(id)}
          >Save
          </SaveBtn>
        </Row>
      </li>
    </div>
  )
}

export default ResultsCard;