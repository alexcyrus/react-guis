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
