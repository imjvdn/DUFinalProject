import React, { Component } from 'react';
// import Terminal from '../components/displays/Terminal';
import './style.css';
// import { Link } from 'react-router-dom';
import { Input, TextArea, FormBtn, FormBtnRest } from '../components/form/Form';
// import { Link } from 'react-router-dom';
// import CardSave from '../components/cards/CardSave';
import { CardItem, List } from '../components/cards/CardList';
import DeleteBtn from '../components/buttons/DeleteBtn';
import Calendar from '../components/calendar/Calendar';
import ResultsCard from '../components/searchResults/results';
import Restaurant from '../components/searchResults/Restaurant';
import API from '../utils/API';
import { Col } from 'react-bootstrap';
import Weather from '../src_weather/components/App';


class Home extends Component {
  state = {
    name: '',
    title: '',
    displayname: '',
    email: '',
    description: '',
    search: '',
    result: [],
    plans: [],
    restaurant: '',
    restaurants: []
  };

  componenetDidMount() {
    this.loadPlans();
  }

  loadPlans = () => {
    console.log("loaded plans");
    API.getPlans()
      .then((res) =>
        this.setState({ plans: res.data, title: "", description: "" })
      )
      .catch((err) => console.log(err));
  };

  deletePlans = id => {
    API.deletePlans(id)
      .then(res => this.loadPlans())
      .catch(err => console.log(err));
  };

  handleinputchange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('youve made it this far');
    API.savePlans({
      title: this.state.title,
      description: this.state.description
    })
      .then(res => this.loadPlans())
      .catch((err) => console.log(err));
  };

  handlesearchsubmit = (event) => {
    event.preventDefault();
    this.searchApi(
      { search: event.target.value },
      console.log(this.state.search)
    );
  };
  
  handleSearchRestaurant = (event) => {
    console.log("you are hitting here")
    event.preventDefault();
    this.searchRestaurant(
      { restaurant: event.target.value },
      console.log(this.state.restaurant)
    );
  };

  searchApi = (event) => {
    API.search(this.state.search)
      .then((res) => {
        this.setState({
          result: res.data._embedded.events,
          search: '',
        });
        console.log(res.data._embedded.events);
      })
      .catch((err) => {
        throw err;
      });
  };

  searchRestaurant = (event) => {
   
    API.searchRestaurant(this.state.restaurant)
      .then((res) => {
        // let array = res.data.restaurants[0].restaurant;
        let array = [];
        for (let i = 0; i < 5; i++) {
          array.push(res.data.restaurants[i]);
          console.log(res.data.restaurants[i]);
        }
        console.log(array);
        this.setState({
          restaurants: array,
          restaurant: '',
        });
        console.log(res.data);
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
                <FormBtn
                  disabled={!this.state.title}
                  // type="submit"
                  // handleInputChange={this.handleInputChange}
                  onClick={this.handleFormSubmit}
                >
                  Save
                </FormBtn>
              </form>
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
                  // handleinputchange={this.handleinputchange}
                  onClick={this.handlesearchsubmit}
                >
                  Search
                </button>
                <input className="apis"
                  value={this.state.restaurant}
                  onChange={this.handleinputchange}
                  name="restaurant"
                  placeholder="Restaurant"
                />
                <FormBtnRest className="apibutton"
                  // disabled={!this.state.search}
                  value={this.state.restaurant}
                  // handleInputChange={this.handleinputchange}
                  handleSearchRestaurant={this.handleSearchRestaurant}
                >
                  Search
                </FormBtnRest>
                
              </form>
            </div>
                    
            <div className="col">
              {this.state.plans.length ? (
                <List>
                  {this.state.plans.map((plan) => (
                    <CardItem key={plan._id} title={plan.title} description={plan.description}>
                      <strong>
                        {plan.title}
                      </strong>
                      <h3>{plan.description}</h3>
                  <DeleteBtn onClick={() => this.deletePlans(plan._id)} />
                    </CardItem>
                  ))}
                </List>
              ) : (
                <h5>No Results to Display</h5>
              )}

            </div>
            
          </div>
          <Col>
            
            {this.state.result.map((result) => {
              return (
                <ResultsCard
                  name={result.name}
                  type={result.type}
                ></ResultsCard>
              );
            })}

          </Col>
          <Col>
            
            {this.state.restaurants.map((result) => {
              console.log(result);
              return (
                <Restaurant
                  name={result.restaurant.name}
                  type={result.restaurant.cuisines}
                ></Restaurant>
              );
            })}

          </Col>

        </div>
        <div>
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