import React, { useContext, useState } from 'react';
import UserProvider from '../contexts/UserProvider';
// import { CreateBtn, TrendingBtn } from '../components/form/Form';
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
      <Row className="prof-row">
        
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <Calendar />
          <a className="create-btn" href="/">Plan a Night</a>
          <a className="trend-btn" href="/">Trending Events</a>
      </Row>
      {/* <Row>
        
      </Row> */}
      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Profile;
