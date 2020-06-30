import React from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProfileCard = ({ props }) => {
    return (
        <Card className="prof-card" style={{ width: '16rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Date Night Title</Card.Title>
                <Card.Text>
                    My date and I went on a hike and then to the breweries using this new "Trails on Tap" App, And we Posted most of our exciting 
                    photos of our dinner on "Hoot & Holla".
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Look Out Moutain</ListGroupItem>
                <ListGroupItem>4 Noses Brewery</ListGroupItem>
                <ListGroupItem>Cheese Cake Facotry</ListGroupItem>
                <ListGroupItem>The King of Staten Island</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#" className="date-night-date">5/13/20</Card.Link>
                <Card.Link href="#" className="del-btn">Delete</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default ProfileCard;