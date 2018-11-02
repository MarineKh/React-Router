import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import UsersList from './UsersList'
import Albums from './Albums'
import Photos from './Photos'

const API_USERS = 'https://jsonplaceholder.typicode.com/users'
const API_Albums = 'https://jsonplaceholder.typicode.com/users/1/albums'


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            albums: []
        }

        this.fetchUsers = this.fetchUsers.bind(this)
        this.fetchAlbums = this.fetchAlbums.bind(this)
        this.userClick = this.userClick.bind(this)
    }

    componentDidMount() {
        this.fetchUsers()
        this.fetchAlbums()
    }

    fetchUsers() {
        axios.get(API_USERS)
            .then(result => {
                this.setState({
                    users: [...this.state.users, ...result.data]
                })
                console.log('state', this.state.users);
            })
            .catch(error => console.log(error)
            )
    }

    fetchAlbums() {
        axios.get(API_Albums)
            .then(result => {
                for (let val of result.data) {
                    this.setState({
                        albums: [...this.state.albums, val.title]
                    })
                }
            })
            .catch(error => console.log(error)
            )
    }

    userClick(e) {
        console.log(e.target);
    }

    render() {

        return (
            <div className='rr--flex' >
                <UsersList usersName={this.state.users} onUserClickhandler={this.userClick} />
                <Albums usersAlbums={this.state.albums} />
            </div>

        );
    }
}

export default Main;