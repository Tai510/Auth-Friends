import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';


function NavBar() {

    return (
        <div className='NavBar'>
            <Link to='/login'>Log In</Link>
            <Link to='/myfriends'>Friends List</Link>
        </div> /* NavBar end */
    )
}

export default NavBar;