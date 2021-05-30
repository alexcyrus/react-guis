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
    const scale = this.state.scale
    const temp = this.state.temp;
    const celsius = scale === 'f' ? (temp - 32) * (5/9) : temp;
    const fahrenheight = scale === 'c' ? (temp * (9/5)) + 32 : temp;
    
    return (
      <div>
        <h2>Temperature Converter</h2>
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
