import React, { Component } from 'react';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Five GUIs</h1>
        <Counter />
        <TemperatureConverter />
      </div>
    );
  }
}

export default App;
