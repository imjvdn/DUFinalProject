import React, { Component } from 'react';
// import Terminal from '../components/displays/Terminal';
import './style.css';
import { Input, TextArea, FormBtn } from '../components/form/Form';
// import { Link } from 'react-router-dom';
import { Input, TextArea, FormBtn, FormBtnRest } from '../components/form/Form';
import { Link } from 'react-router-dom';
import CardSave from '../components/cards/CardSave';
import CardList from '../components/cards/CardList';
// import Calendar from '../components/calendar/Calendar';
import ResultsCard from '../components/searchResults/results';
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
    restaurant: ''
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
                  onChange={this.handleInputChange}
                  name="restaurant"
                  placeholder="Restaurant"
                />
                <FormBtnRest className="apibutton"
                  // disabled={!this.state.search}
                  value={this.state.restaurant}
                  handleInputChange={this.handleInputChange}
                  handleSearchRestaurant={this.handleSearchRestaurant}
                >
                  Search
                </FormBtnRest>
                
              </form>
            </div>
            <div className="col">
              {this.state.plans.length ? (
                <CardSave>
                  {this.state.plans.map((plan) => (
                    <CardList key={plan._id} title={plan.title} description={plan.description}>
                      {/* <Link to={'/plans/' + plan._id}> */}
                        {/* <strong>{plan.title}</strong> */}
                        {/* {plan.description} */}
                      {/* </Link> */}
                    </CardList>
                  ))}
                </CardSave>
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

          {/* <Calendar /> */}

          <Weather />
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
