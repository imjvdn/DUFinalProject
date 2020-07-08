import React, { Component } from 'react';
// import Terminal from '../components/displays/Terminal';
import './style.css';
import { Input, TextArea, FormBtn } from '../components/form/Form';
// import { Link } from 'react-router-dom';
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
  render() {
    return (
      <div>
        <p className="page-title-name">Welcome to Nite-tinerary!</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
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
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleinputchange}
                  name="search"
                  placeholder="Event"
                />
                <FormBtn
                  disabled={!this.state.search}
                  value={this.state.search}
                  // handleinputchange={this.handleinputchange}
                  onClick={this.handlesearchsubmit}
                >
                  Search
                </FormBtn>
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
            {/* <Calendar /> */}
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
        </div>
      </div>
    );
  }
}
export default Home;
