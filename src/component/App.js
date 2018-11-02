import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import UsersList from './UsersList'
import Albums from './Albums'
import Photos from './Photos';
import Error from './Error'
import Navigation from './Navigation'
import Main from './Main';

const API_USERS = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <Main /> */}
            {/* <Navigation /> */}
            <Switch>
              <Route path='/' component={Main} />
              <Route path='/userAlbum' component={Albums} />
              <Route path='/albumPhotos' component={Photos} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;