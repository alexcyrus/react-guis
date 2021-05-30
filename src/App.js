import React, { Component } from 'react';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import FlightBooker from './components/FlightBooker';
import Timer from './components/Timer';
import CRUD from './components/CRUD';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React GUIs</h1>
        <Counter />
        <TemperatureConverter />
        <FlightBooker />
        <Timer />
        <CRUD />
      </div>
    );
  }
}

export default App;
