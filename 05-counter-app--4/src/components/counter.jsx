import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };
  // render
  render() {
    console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        {this.counter()}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
  counter() {
    // format
    const classes =
      "badge m-2 badge-" +
      (this.props.counter.value === 0 ? "warning" : "primary");
    const label = this.props.counter.value || "Nada"; // const label = count === 0 ? "Nada" : count;
    return <span className={classes}>{label}</span>;
  }
  // events
  // handleIncrement = () => {
  //   const { value } = this.state;
  //   this.setState({ value: value + 1 });
  //   console.log("increment", value, this.state);
  // };
}

export default Counter;
