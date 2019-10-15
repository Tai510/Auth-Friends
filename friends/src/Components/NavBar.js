import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';


function NavBar() {

    return (
        <div className='NavBar'>
            <Link to='/login'>Log In</Link>
        </div> /* NavBar end */
    )
}

export default NavBar;