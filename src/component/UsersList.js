import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let usersName = this
            .props
            .usersName
            .map((user, index) => <li
                className='user-name'
                key={index}
                onClick={this.props.onUserClickhandler} user={{ user }}>
                {user.name}
            </li>)

        return (
            <div>
                <span>Users</span>
                <ul className='rr--user-list'>
                    {usersName}
                </ul>
            </div>

        )
    }
}