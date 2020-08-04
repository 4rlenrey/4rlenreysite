import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import profileP from "../Images/logo.jpg";
import "./nav-panel.css";

import Games from "../games";
import About from "../about";
import Experiments from "../experiments";

const choices = {
  1: "About",
  2: "Games",
  3: "Experiments",
};

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <BrowserRouter>
          <img className="profileP" alt="proff" src={profileP} />
          <div className="navigators">
            <Link to="/about">
              <Button className="button">{choices[1]}</Button>
            </Link>
            <Link to="/games">
              <Button className="button">{choices[2]}</Button>
            </Link>
            <Link to="/experiments">
              <Button className="button">{choices[3]}</Button>
            </Link>
          </div>
          <Switch>
            <Route path="/experiments" component={Experiments} />
            <Route path="/games" component={Games} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Panel;
