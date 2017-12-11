import React, { Component } from 'react';
import logo from './school-desk.svg';
import './App.css';
import {sittingPairs, sittingPairs2} from './seats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Random Desk Sitting</h1>
        </header>
        <p className="App-intro">
          To get started, type the number of your class students in the box.
          Now you can place your students randomly, 
          based on their calatogue number.
        </p>
        <NameForm />
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '24'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const numberOfSeats = parseInt(this.state.value) || 0;
    return (
      <div>
        <label>
          Number: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <NumberList numbers={sittingPairs(numberOfSeats)} />
      </div>
    );
  }
}

function ListItem(props) {
  return <div className="wrapper-item">{props.value}</div>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem value={number} />

  );
  return (
    <div className="wrapper-table">
      {listItems}
    </div>
  );
}
export default App;
