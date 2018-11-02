import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Albums extends Component {
    render() {
        let usersAlbums = this.props.usersAlbums.map((album, index) =>
            <li className='album-name' key={index + "album"}>
                {album}
            </li>
        )
        return (
            <div>
                <span>Albums</span>
                <ul className='rr--album-list'>
                    {usersAlbums}
                </ul>
            </div>
        )
    }
}