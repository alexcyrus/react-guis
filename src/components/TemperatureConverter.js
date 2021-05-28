import React, { Component } from 'react';

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temp: 0
    }
  }

  tempC = (event) => {
    this.setState({
      scale: 'c',
      temp: event.target.value
    })
  }

  tempF = (event) => {
    this.setState({
      scale: 'f',
      temp: event.target.value
    })
  }

  render() {
    const celsius = this.state.scale === 'f' ? (this.state.temp - 32) * (5/9) : this.state.temp;
    const fahrenheight = this.state.scale === 'c' ? (this.state.temp * (5/9)) + 32 : this.state.temp;
    
    return (
      <div>
        <fieldset>
          <legend>Celsius</legend>
          <input value={celsius} onChange={this.tempC} />
        </fieldset>

        <fieldset>
          <legend>Fahrenheight</legend>
          <input value={fahrenheight} onChange={this.tempF} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureConverter;
