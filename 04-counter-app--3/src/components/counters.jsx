import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    imageUrl: "https://picsum.photos/g/300/200?random"
  };
  render() {
    return (
      <div>
        {this.image()}
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            counter={counter}
            value={counter.value}
            onDelete={this.handleDelete}
            selected
          >
            <span>#{counter.id}</span>
          </Counter>
        ))}
      </div>
    );
  }
  image() {
    return (
      <div className="m-2">
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
  handleDelete = counterId => {
    console.log("handling delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default Counters;
