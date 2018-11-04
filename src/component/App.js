import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UsersList from './UsersList'
import UsersList from "./UsersList";
import Albums from "./Albums";
import Photos from "./Photos";
import Error from "./Error";
// import Navigation from './Navigation'
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <Switch> */}
            <Route path="/" component={UsersList} />
            <Route path="/users/:id" component={Albums} />
            <Route path="/users/:id/albums/:id" component={Photos} />
            {/* <Route component={Error} /> */}
            {/* </Switch> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
