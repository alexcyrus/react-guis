import React, { Component } from 'react';

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temp: 0
    }
  }

  // Temperature in Celsius
  tempC = (e) => {
    this.setState({
      scale: 'c',
      temp: e.target.value
    })
  }

  // Temperature in Fahrenheight
  tempF = (e) => {
    this.setState({
      scale: 'f',
      temp: e.target.value
    })
  }

  render() {
    // Calculate temperature
    const scale = this.state.scale
    const temp = this.state.temp;
    const celsius = scale === 'f' ? (temp - 32) * (5/9) : temp;
    const fahrenheight = scale === 'c' ? (temp * (9/5)) + 32 : temp;
    
    return (
      <div className='tempContainer'>
        <fieldset>
          <input value={celsius} onChange={this.tempC} />
          <label>Celsius</label>
        </fieldset>

        <span>=</span>

        <fieldset>
          <input value={fahrenheight} onChange={this.tempF} />
          <label>Fahrenheight</label>
        </fieldset>
      </div>
    );
  }
}

export default TemperatureConverter;
