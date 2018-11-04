import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";

import axios from "axios";

// const API_Albums = id =>
//   `https://jsonplaceholder.typicode.com/users/${
//     this.props.match.params.id
//   }/albums`;

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsList: []
    };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchAlbums();
    }
  }

  fetchAlbums() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${
        this.props.match.params.id
      }/albums`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          albumsList: json
        });
      });
  }

  render() {
    const { albumsList } = this.state;
    return (
      <div className="list">
        <h2>
          <Link to={`/users/${this.props.match.params.id}`} className="title">
            Albums
          </Link>
        </h2>

        <ul>
          {albumsList.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  key={index}
                  to={{
                    pathname: `/users/${item.userId}/albums/${item.id}`,
                    state: {
                      title: `${item.title}`
                    }
                  }}
                  activeClassName="active"
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired
  };
}
