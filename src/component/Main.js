import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import UsersList from './UsersList'
import Albums from './Albums'
// import Photos from './Photos'

const API_USERS = 'https://jsonplaceholder.typicode.com/users'
// const API_Albums = `https://jsonplaceholder.typicode.com/users/2/albums`


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            albums: [],
            currentItemId: 0
        }

        this.fetchUsers = this.fetchUsers.bind(this)
        this.fetchAlbums = this.fetchAlbums.bind(this)
        this.userClick = this.userClick.bind(this)
    }

    componentDidMount() {
        this.fetchUsers()
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

    fetchAlbums(id) {
        // debugger
        console.log('fetchAlbums id', id);
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
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
        // let current = this.state.users.filter(obj => obj.id !== );
        this.fetchAlbums(e.target.id)
        this.setState({
            currentItemId: e.target.id
        })
        console.log(e.target.id);
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