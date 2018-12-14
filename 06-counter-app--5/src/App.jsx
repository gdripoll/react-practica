import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    imageUrl: "https://picsum.photos/300/200?random" // https://picsum.photos/g/300/200?random
  };

  constructor(props) {
    super(props);
    console.log("App:constructor", props);
    // this.state = this.props.algooooo
  }

  componentWillMount() {
    // ajax Call
    // this.setState({ counters })
    console.log("App:componentWillMount");
  }
  componentDidMount() {
    // ajax Call
    // this.setState({ counters })
    console.log("App:componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counters !== this.state.counters) {
      console.log(
        "App:componentDidUpdate -- CAMBIO! ajax global?",
        prevProps,
        prevState
      );
      // console.log("App:componentDidUpdate -- prevProps", prevProps);
      // console.log("App:componentDidUpdate -- prevState", prevState);
    }
  }

  render() {
    console.log("App:render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
        {this.image()}
      </React.Fragment>
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
  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default App;
