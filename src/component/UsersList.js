import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import axios from "axios";

const API_USERS = "https://jsonplaceholder.typicode.com/users";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: []
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    axios
      .get(API_USERS)
      .then(result => {
        this.setState({
          userList: [...this.state.userList, ...result.data]
        });
        // console.log("state", this.state.userList);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { userList } = this.state;
    return (
      <div className="list">
        <h2>
          <Link to="/" className="title">
            Users
          </Link>
        </h2>

        <ul>
          {userList.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  key={index}
                  to={`/users/${item.id}`}
                  activeClassName="active"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
