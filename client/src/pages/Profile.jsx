import React, { Component } from 'react';
// import UserProvider from '../contexts/UserProvider';
// import { CreateBtn, TrendingBtn } from '../components/form/Form';
import Calendar from "../components/calendar/Calendar";
import { Row } from 'react-bootstrap';
import API from '../utils/API';
import { Card } from 'react-bootstrap';
import { ProfileItem, List } from '../components/cards/ProfileCard';
import "./style.css";

class Profile extends Component {
  //States for users profile to set for rednering whats in the database
  state = {
    plans: [],
    username: ''
  }
  //Automatically loads the plans that the user already saves
  componentDidMount() {
    this.loadPlans();
  }
  //Api call to get whats saved in the database
  loadPlans = () => {
    console.log("loaded plans");
    API.getPlans()
      .then((res) =>
        this.setState({ plans: res.data })
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="page">
        <p className="profile-title" style={{ textAlign: 'center' }}>
          Your Nights ❤
        </p>
            <a className="trend-btn" href="/">Trending Events</a>
            <a className="create-btn" href="/">Plan a Night</a>
        <Row className="prof-row">
          <Card className="prof-card" style={{ width: '84%', overFlowY: 'scroll' }}>
            <Card.Body style={{ backgroundColor: 'cadetBlue'}}>
              {this.state.plans.length ? (
                <List>
                  {this.state.plans.map((plan) => (
                    <ProfileItem key={plan._id} title={plan.title} description={plan.description}>
                      <strong>
                        {plan.title}
                      </strong>
                      <h3>{plan.description}</h3>
                      <Card.Body>
                        {plan.date}
                      </Card.Body>
                    </ProfileItem>
                  )
                  )}
                </List>
              ) : (
                  <h5>No Plans to Display</h5>
                )}
            </Card.Body>
          </Card>
        </Row>
        <Row className="cal-row">
          <Calendar />
        </Row>
        <div style={{ marginBottom: 20 }} />
      </div>
    );
  }
}


export default Profile;
