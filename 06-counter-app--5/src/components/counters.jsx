import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    console.log("Counters:render -- props", this.props);

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            counter={counter}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            selected
          >
            <span>#{counter.id}</span>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
