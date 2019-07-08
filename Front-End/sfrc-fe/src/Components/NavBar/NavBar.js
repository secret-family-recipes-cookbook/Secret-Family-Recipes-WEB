import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';


const NavBar = props => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <Link to='/'>
                    <h1>Secret Family Recipes</h1>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;