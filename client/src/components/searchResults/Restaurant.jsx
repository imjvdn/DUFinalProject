import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function Restaurant(props) {
  return (
    <div className="result-div">
      <li className="search-list list-group-item">
        <Row>
          <Col>
            <Row>
              <h3>
                Name: {props.name}
                {/* Cuisine: {props.type} */}
              </h3>
            </Row>
            <Row>
              <h3>
                Cuisine: {props.type}
              </h3>
              {/* <button className="getTickets"><a href="https://www.ticketmaster.com/">Purchase Tickets</a></button> */}
            </Row>
          </Col>
          {/* <SaveBtn
          id={id}
          onClick={savedEvent}
          >Save
          </SaveBtn> */}
        </Row>
      </li>
    </div>
  )
}

export default Restaurant;