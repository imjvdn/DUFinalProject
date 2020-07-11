import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function ResultsCard({ name, type, savedEvent, deleteEvent, link, id }) {
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
              <button className="getTickets"><a href="https://www.ticketmaster.com/" target="_blank">Purchase Tickets</a></button>
            </Row>
          </Col>
          <SaveBtn
            id={id}
            onClick={savedEvent}
          >Save
          </SaveBtn>
        </Row>
      </li>
    </div>
  )
}

export default ResultsCard;