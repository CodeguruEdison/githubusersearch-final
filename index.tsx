import React, { useState } from "react";
import { render } from "react-dom";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/useritem";
import Home from "./components/pages/home";
import User from "./components/users/user";
import "./style.css";
import axios from "axios";
import NotFound from "./components/pages/notfound";

import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
interface AppProps {}
interface AppState {
  name: string;
}

//class App extends Component<AppProps, AppState> {
const App = () => {
  return (
    <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                component ={Home}
              />
              <Route exact path="/about" component={About} />
              <Route exact  path="/user/:login" component ={User}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

render(<App />, document.getElementById("root"));
