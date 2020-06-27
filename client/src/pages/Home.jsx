import React from 'react';
// import Terminal from '../components/displays/Terminal';
import "./style.css";
import { Input, TextArea } from '../components/form/Form';
import CardSave from '../components/cards/CardSave';
import { Col, Row } from "../components/Grid";
const Home = () => {
  return (
    <div>
      <p className="page-title">Welcome to Nitinerary!</p>
    <Col size="md-8">
      <Row>
      <form>
        <Input
        placeholder="title"
        >
        </Input>
        <TextArea placeholder="Description">

        </TextArea>
      </form>
      <CardSave />
      </Row>
    </Col>
      
      {/* <p style={{ fontSize: 20 }}>
        Passport.js contains support for over
        <span style={{ color: 'var(--primary-red)' }}> 500+ </span>
        Get started today with just a username and password for apps like
        Facebook, Instagram, and Google.
      </p> */}
      {/* <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28 }}>Popular Strategies</p> */}
      {/* <CardList />
      <div style={{ marginBottom: 20 }} /> */}
    </div>
  );
};

export default Home;
