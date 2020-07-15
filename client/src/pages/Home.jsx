import React, { Component } from 'react';
import './style.css';
import { Input, TextArea, FormBtn, FormBtnRest } from '../components/form/Form';
// import { Link } from 'react-router-dom';
// import CardSave from '../components/cards/CardSave';
import { CardItem, List } from '../components/cards/CardList';
import DeleteBtn from '../components/buttons/DeleteBtn';
import Calendar from '../components/calendar/Calendar';
import ResultsCard from '../components/searchResults/results';
import Restaurant from '../components/searchResults/Restaurant';
import API from '../utils/API';
import { Card, Col } from 'react-bootstrap';
import Weather from '../src_weather/components/App';


class Home extends Component {
  state = {
    name: '',
    title: '',
    displayname: '',
    date: '',
    email: '',
    description: '',
    search: '',
    result: [],
    plans: [],
    restaurant: '',
    restaurants: []
  };
  //Automatically loads whats saved in the Database when page is loaded
  componenetDidMount() {
    this.loadPlans();
  }
  //Loads the users plans from the Database
  loadPlans = () => {
    // console.log("loaded plans");
    API.getPlans()
      .then((res) =>
        this.setState({ plans: res.data })
      )
      .catch((err) => console.log(err));
  };
  //Delete a plan
  deletePlans = id => {
    API.deletePlans(id)
      .then(res => this.loadPlans())
      .catch(err => console.log(err));
  };

  saveItem = event => {
    // event.preventDefault();
    console.log("Saving Event")
    const eventId = event;
    const newState = { ...this.state };
    let savedEvent = this.state.result.filter(event => event.id===eventId);
    const newEvent = {
      title: savedEvent[0].name,
      type: savedEvent[0].type
    };
    if (this.state.result[eventId]) {
      return alert("You already have that event saved.");
    } else {
      // event.preventDefault();
      newState.result[eventId]=newEvent;
      this.setState(newState);
      API.savePlans({
        title: savedEvent[0].name,
        type: savedEvent[0].type 
      })
      .then(res => this.loadPlans())
      .catch(err => console.log(err));
    };
  };

  saveRestaurant = event => {
    console.log("Saving Restaurant")
    const eventId = event
    // console.log(event);
    const newState = { ...this.state };
    let savedRestaurant = this.state.restaurants.filter(restaurant => restaurant.id === eventId);
    console.log(eventId);
    const newEvent = {
      title: savedRestaurant[0].restaurant.name,
      type: savedRestaurant[0].restaurant.type,
      link: savedRestaurant[0].restaurant.url
    };
    if (this.state.result[eventId]) {
      return alert("You already have that event saved.");
    } else {
      // event.preventDefault();
      newState.result[eventId]=newEvent;
      this.setState(newState);
      API.savePlans({
        title: savedRestaurant[0].restaurant.name,
        type: savedRestaurant[0].restaurant.type,
        link: savedRestaurant[0].restaurant.url
      })
      .then(res => this.loadPlans())
      .catch(err => console.log(err));
    };
  };

  //Enables the changes so the user is able to see what's typed
  handleinputchange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  //Sets title and description the user gives
  handleFormSubmit = event => {
    event.preventDefault();
    console.log('youve made it this far');
    API.savePlans({
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    }).then((res) => this.setState({ title: "", description: "" }))
      .then(res => this.loadPlans())
      .catch((err) => console.log(err));
  };
  //Sets state of what the user wants to search for ticket master
  handlesearchsubmit = (event) => {
    event.preventDefault();
    this.searchApi(
      { search: event.target.value },
      console.log(this.state.search)
    );
  };
  //Set state of what you're searching
  handleSearchRestaurant = (event) => {
    console.log("you are hitting here")
    event.preventDefault();
    this.searchRestaurant(
      { restaurant: event.target.value },
      console.log(this.state.restaurant)
    );
  };
  //Search Ticket Master Api
  searchApi = (event) => {
    API.search(this.state.search)
      .then((res) => {
        let tmArray = [];
        // for (let i = 0; i < 2; i++) {
        //   tmArray.push(res.data._embedded.events[i]);
        //   console.log(tmArray);
        // }
        this.setState({
          restaurants: [],
          result: res.data._embedded.events,
          search: '',
        });
        console.log(res.data._embedded.events);
      })
      .catch((err) => {
        throw err;
      });
  };
  //Serach Restaurant Api
  searchRestaurant = (event) => {
    
    API.searchRestaurant(this.state.restaurant)
      .then((res) => {
        // let array = res.data.restaurants[0].restaurant;
        console.log(res)
        let array = [];
        for (let i = 0; i < 20; i++) {
          let str = res.data.restaurants[i].restaurant.cuisines;
          console.log(str)
          if (str.toLowerCase().includes(this.state.restaurant.toLowerCase()))
            array.push(res.data.restaurants[i]);
          console.log(res.data.restaurants[i].restaurant.name);
        }
        console.log(array);
        this.setState({
          result: [],
          restaurants: array,
          restaurant: '',
        });
        console.log(this.state.restaurants[0].restaurant.name);
        // console.log(result)
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    return (
      <div>
        <p className="page-title-name">Welcome to Nite-tinerary!</p>
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Form to create users own plan */}
              <form >
                <Input
                  value={this.state.title}
                  onChange={this.handleinputchange}
                  name="title"
                  placeholder="Plan Name (Required)"
                />
                <TextArea
                  value={this.state.description}
                  onChange={this.handleinputchange}
                  name="description"
                  placeholder="Description"
                />
                <input 
                  className="date-input" 
                  type="date"
                  onChange={this.handleinputchange}
                  name="date"
                  value={this.state.date}
                  >

                  </input>
                </form>
                
              <form>
                <FormBtn
                  disabled={!this.state.title}
                  onClick={this.handleFormSubmit}
                >
                  Save
                </FormBtn>
              </form>
              {/* Form and buttons for seraching Api's */}
              <form >
                <input className="apis"
                  value={this.state.search}
                  onChange={this.handleinputchange}
                  name="search"
                  placeholder="Event"
                />
                <button className="apibutton"
                  disabled={!this.state.search}
                  value={this.state.search}              
                  onClick={this.handlesearchsubmit}
                >
                  Search
                </button>
                <input className="apis"
                  value={this.state.restaurant}
                  onChange={this.handleinputchange}
                  name="restaurant"
                  placeholder="Cuisines"
                />
                <FormBtnRest className="apibutton"
                  disabled={!this.state.restaurant}
                  value={this.state.restaurant}
                  handleSearchRestaurant={this.handleSearchRestaurant}
                >
                  Search
                </FormBtnRest>

              </form>
            </div>

            <div className="col">
              <Card className="date-card" style={{ width: '95%', overFlowY: 'scroll' }}>
                <Card.Body style={{ backgroundColor: 'rgb(240, 222, 222)' }}>
                  {this.state.plans.length ? (
                    
                    <List>
                      <h2>Saved Plans</h2>
                      {this.state.plans.map((plan) => (
                        <CardItem key={plan._id} title={plan.title} description={plan.description}>
                          <h3>
                            {plan.title}
                          </h3>
                          <h5>{plan.description}</h5>
                          <DeleteBtn className="saveDate" onClick={() => this.deletePlans(plan._id)} />
                        </CardItem>
                      ))}
                    </List>
                  ) : (
                      <h5>No Results to Display</h5>
                    )}
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* Results for Ticketmaster Api */}
          <Col className="tmres">
            {this.state.result.map((result) => {
              return (
                <ResultsCard
                  key={result.id}
                  id={result.id}
                  saveEvent={this.saveItem}
                  name={result.name}
                  type={result.type}
                ></ResultsCard>
              );
            })}
          </Col>
          {/* Results for Restaurant Api */}
          <Col>
            {this.state.restaurants.map((result) => {
              console.log(result);
              return (
                <Restaurant
                  key={result.id}
                  id={result.id}
                  savedRestaurant={this.saveRestaurant}
                  name={result.restaurant.name}
                  type={result.restaurant.cuisines}
                  url={result.restaurant.url}
                ></Restaurant>
              );
            })}

          </Col>

        </div>
        <div className="calendarDiv">
          <Calendar />
        </div>
        <div className="weatherDiv">
          <Weather />
        </div>
      </div>
    );
  }
}

export default Home;