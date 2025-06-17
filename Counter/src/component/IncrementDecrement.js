// IncrementDecrement.js
import React, { Component } from "react";

class IncrementDecrement extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  onClickAdd = () => {
    this.setState({ number: this.state.number + 1 });
  };

  onClickSub = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    }
  };

  render() {
    return (
      <div>
        <h3>Counter: {this.state.number}</h3>
        <button onClick={this.onClickAdd} className="btn btn-success m-2">
          +
        </button>
        <button onClick={this.onClickSub} className="btn btn-danger m-2">
          -
        </button>
      </div>
    );
  }
}

export default IncrementDecrement;
