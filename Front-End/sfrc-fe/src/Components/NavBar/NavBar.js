import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';


const NavBar = props => {
    return (
        <div className="navbar-wrapper">

            <div className="navbar-container">

                <div className="link-container">
                
                    {/* <Link to='/'>
                        <h1>Home</h1>
                    </Link> */}
                    <div>
                    <Link to='/signup'>
                        <h1>{props.isLoggedIn ? null : "Sign Up"}</h1>
                    </Link>
                    </div>

                    <Link to='/login'>
                        <h1>{props.isLoggedIn ? null : "Login"}</h1>
                    </Link>

                    <Link to='/recipes'>
                        <h1>{props.isLoggedIn ? "Recipes" : null}</h1>
                    </Link>
                    
                    <Link to='/addrecipe'>
                        <h1>{props.isLoggedIn ? "Add Recipe" : null}</h1>
                    </Link>

                    <Link to='/' onClick={props.logout}>
                        <h1>{props.isLoggedIn ? "Logout" : null}</h1>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default NavBar;