import React, { Component } from 'react';
// import Terminal from '../components/displays/Terminal';
import './style.css';
import { Input, TextArea, FormBtn } from '../components/form/Form';
import { Link } from 'react-router-dom';
import CardSave from '../components/cards/CardSave';
import CardList from '../components/cards/CardList';
import Calendar from '../components/calendar/Calendar';
import ResultsCard from '../components/searchResults/results';
import API from '../utils/API';
import { Col } from 'react-bootstrap';
import Weather from '../src_weather/components/App';

class Home extends Component {
  state = {
    name: '',
    description: '',
    search: '',
    result: [],
    plans: [],
  };
  componenetDidMount() {
    this.loadPlans();
  }
  loadPlans = () => {
    API.getPlans()
      .then((res) =>
        this.setState({ plans: res.data, name: '', description: '' })
      )
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePlans({
      name: this.state.name,
      description: this.state.description,
    })
      .then((res) => this.loadPlans())
      .catch((err) => console.log(err));
  };
  handleSearchSubmit = (event) => {
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
      { search: event.target.value },
      console.log(this.state.search)
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
   
    API.searchRestaurant(this.state.search)
      .then((res) => {
        this.setState({
          result: res.data,
          search: '',
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
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Plan Name"
                />
                <TextArea
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="Description"
                />
                <FormBtn
                  disabled={!this.state.name}
                  // value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  // handleSearchSubmit={this.handleSearchSubmit}
                >
                  Save
                </FormBtn>
              </form>
              <form >
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Event"
                />
                <FormBtn
                  disabled={!this.state.search}
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleSearchSubmit={this.handleSearchSubmit}
                >
                  Search
                </FormBtn>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Restaurant"
                />
                <FormBtn
                  // disabled={!this.state.search}
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                
                  handleSearchRestaurant={this.handleSearchRestaurant}
                >
                  Search
                </FormBtn>
              </form>
            </div>
            <div className="col">
              <CardSave>
                {this.state.plans.map((plan) => (
                  <CardList key={plan._id}>
                    <Link to={'/plans/' + plan._id}>
                      <strong>{plan.title}</strong>
                      <h3>{plan.description}</h3>
                    </Link>
                  </CardList>
                ))}
              </CardSave>
            </div>
          </div>
          {/* <Col>
            
            {this.state.result.map((result) => {
              return (
                <ResultsCard
                  name={result.name}
                  type={result.type}
                ></ResultsCard>
              );
            })}
            
          </Col> */}
     
          <Calendar />

          <Weather />
        </div>
      </div>
    );
  }
}
export default Home;
