import React from "react";
import { Nav, Row, Col, Card } from 'react-bootstrap';
// import CardList from './CardList';
import DeleteBtn from "../buttons/DeleteBtn";
import "./style.css";
// import { DeleteBtn } from "../searchResults/ResBtn";
const CardSave = ({ children, id, deleteItem, title, description }) => {
    // const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    return (
        <Card className="main-card">
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <h2> Your Nite-tinerary</h2>
                    <Nav.Item style={{ marginLeft: "55%" }}>
                        <Nav.Link href="#first">Saved</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Done</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Card.Header>
            <Card.Body>
                <li className="search-list list-group-item">
                    <Row id={title} key={id}>
                        <Col size="5">
                            <Row>
                                <h3 className="plan-title">{title}</h3>
                                <DeleteBtn className="delete-btn" id={id} onClick={deleteItem}/>
                            </Row>
                        </Col>
                        

                    </Row>
                </li>
                {/* <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text> */}
                {/* <Button className="checked" variant="primary" type="checkbox">✔</Button> */}
            </Card.Body>
        </Card>
    );
};

export default CardSave;