import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";
import Bio from "./components/bio";
import Sobre from "./components/sobre";
import Error from "./components/error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="container">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/bio" component={Bio} />
              <Route path="/sobre" component={Sobre} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
