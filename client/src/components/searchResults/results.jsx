import React from "react";
import { Row, Col } from 'react-bootstrap';
import { SaveBtn } from "./ResBtn";
function ResultsCard({ name, type, savedEvent, deleteEvent, link, id }) {
  // if (!savedEvent) {
  //   return (
  //     <div className="article">
  //       <li className="search-list list-group-item">
  //         <Row>
  //           <Col size="8">
  //             <Row>
  //             <h4>
  //               Name: {name}
  //             </h4>
  //           </Row>
  //           <Row>
  //             <h4>
  //               Type: {type}
  //             </h4>
  //             </Row>
  //           </Col>
  //           <DeleteBtn
  //             id={id}
  //             onClick={deleteEvent}
  //           >Delete

  //           </DeleteBtn>
  //         </Row>
  //       </li>
  //     </div>
  //   )
  // }
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
              <button className="getTickets"><a href="https://www.ticketmaster.com/">Purchase Tickets</a></button>
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