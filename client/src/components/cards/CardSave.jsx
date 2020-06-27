import React from "react";
import { Button, Nav, Card } from 'react-bootstrap';
import "./style.css";
const CardSave = () => {
    // const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <h2> Your Nitinerary</h2>
                    <Nav.Item style={{ marginLeft: "30%" }}>
                        <Nav.Link href="#first">Saved</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Done</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CardSave;