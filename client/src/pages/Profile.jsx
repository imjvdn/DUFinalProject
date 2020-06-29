import React, { useContext, useState } from 'react';
import UserProvider from '../contexts/UserProvider';
// import Terminal from '../components/displays/Terminal';
import Calendar from "../components/calendar/Calendar";
import { Row } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import ProfileCard from '../components/cards/ProfileCard';
import _ from 'lodash';
import "./style.css";

const LoginMsg = 'This can be a profile page';

const Profile = () => {
  const [selected, setSelected] = useState('All');
  const userData = useContext(UserProvider.context);
  const text = _.isEmpty(userData) ? LoginMsg : 'Explore Your Data';
  const options = Object.keys(userData).filter((key) => {
    return userData[key] !== null;
  });

  return (
    <div className="page">
      <p className="profile-title" style={{ textAlign: 'center' }}>
        Your Nights ❤
      </p>
      <Row>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          {/* <ProfileCard /> */}
          <Calendar />
      </Row>
      {/* <div className="md-4">
        <Calendar />
      </div> */}

      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Profile;
