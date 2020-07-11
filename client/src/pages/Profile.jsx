import React, { Component } from 'react';
// import UserProvider from '../contexts/UserProvider';
// import { CreateBtn, TrendingBtn } from '../components/form/Form';
import Calendar from "../components/calendar/Calendar";
import { Row } from 'react-bootstrap';
import API from '../utils/API';
// import ProfileCard from '../components/cards/ProfileCard';
// import _ from 'lodash';
import { Card, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import { ProfileItem, List } from '../components/cards/ProfileCard';
import "./style.css";

// const LoginMsg = 'This can be a profile page';
class Profile extends Component {
  state = {
    plans: [],
    username: ''
  }
  componentDidMount() {
    this.loadPlans();
  }
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
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body style={{ backgroundColor: 'cadetBlue'}}>
              {this.state.plans.length ? (
                <List>
                  {this.state.plans.map((plan) => (
                    <ProfileItem key={plan._id} title={plan.title} description={plan.description}>
                      <strong>
                        {plan.title}
                      </strong>
                      <h3>{plan.description}</h3>
                      {/* <DeleteBtn onClick={() => this.deletePlans(plan._id)} /> */}
                      <Card.Body>
                        {plan.date}
                      </Card.Body>
                    </ProfileItem>
                    // <ProfileItem>
                    //   <h4>{plan.date}</h4>
                    // </ProfileItem>

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
