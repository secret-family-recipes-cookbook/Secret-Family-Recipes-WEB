import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';


const NavBar = props => {
    return (
        <div className="navbar-wrapper">

            <div className="navbar-container">

                <div className="link-container">
                
                    <Link to='/'>
                        <h1>Home</h1>
                    </Link>

                    <Link to='/signup'>
                        <h1>Sign Up</h1>
                    </Link>

                    <Link to='/login'>
                        <h1>Login</h1>
                    </Link>

                    <Link to='/recipes'>
                        <h1>Recipes</h1>
                    </Link>

                    <Link to='/addrecipe'>
                        <h1>Add Recipe</h1>
                    </Link>

                    <Link to='/logout'>
                        <h1>Logout</h1>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default NavBar;