import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class UsersList extends Component {
  render() {
    let usersName = this.props.usersName.map((user, index) => (
      <li
        className="user-name"
        key={index}
        id={user.id}
        onClick={this.props.onUserClickhandler}
        user={user}
      >
        {/* <Link to={`/users/${user.id}`}>{user.name}</Link> */}
        {user.name}
      </li>
    ));

    return (
      <Router>
        <div>
          <span>Users</span>
          <ul className="rr--user-list">
            <Link to={"/usersaa"}>{usersName}</Link>
          </ul>
        </div>
      </Router>
    );
  }
}
