import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/g/300/200?random",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: "15px",
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  // }
  render() {
    return (
      <React.Fragment>
        {this.image()}
        {this.counter()}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  // format
  image() {
    return (
      <div className="m-2">
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
  counter() {
    const { count } = this.state;
    const classes = "badge m-2 badge-" + (count === 0 ? "warning" : "primary");
    const label = count || "Nada"; // const label = count === 0 ? "Nada" : count;
    return (
      <span style={this.styles} className={classes}>
        {label}
      </span>
    );
  }
  // events
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("increment", this.state.count, this.state);
  };
}

export default Counter;
