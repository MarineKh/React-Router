import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>UserLinkNav</NavLink>
            <NavLink to='/userAlbum'>UserAlbum</NavLink>
            <NavLink to='/albumPhotos'>AlbumPhotos</NavLink>
        </div>
    )
}

export default Navigation