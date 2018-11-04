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
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired
  };

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.id
        }/albums`
      )
      .then(result => {
        for (let val of result.data) {
          this.setState({
            albumsList: [...this.state.albumsList, val.title]
          });
          console.log(result.data);
          console.log(this.state.albumsList);
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { albumsList } = this.state;
    console.log(this.props.match.params.id);
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
}
