import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  // Increase count
  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    const count = this.state.count

    return (
      <div>
        <h2>{count}</h2>
        <Button onClick={this.increase}>Count</Button>
      </div>
    );
  }
}

export default Counter;
