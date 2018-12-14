import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/300/200?random" // https://picsum.photos/g/300/200?random
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
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
}

export default App;
