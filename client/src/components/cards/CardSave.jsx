import React from "react";
import { Button, Nav, Card } from 'react-bootstrap';
import "./style.css";
const CardSave = ({ children }) => {
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
                <Card.Title>{children}</Card.Title>
                <Card.Text>
                    {/* {children} */}
                </Card.Text>
                <Button className="checked" variant="primary" type="checkbox">✔</Button>
                <Button className="delete" variant="primary">✗</Button>
            </Card.Body>
        </Card>
    );
};

export default CardSave;