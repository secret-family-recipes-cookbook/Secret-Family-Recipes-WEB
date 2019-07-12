import React from 'react';
import axios from 'axios';

import LoginForm from './LoginForm';

class LoginPageView extends React.Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    };

    // event handler that updates the form fields when it is changed by the user
    handleChanges = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            } 
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // some error checking
        if (!this.state.user.username || !this.state.user.password) {
            alert("Please provide a username and password.");
        } else {
            // axios call that checks the entered user name and password to the backend users table
            axios
                .post('https://anthony-secret-family-recipes.herokuapp.com/api/auth/login', this.state.user)
                //.post('http://localhost:2400/api/auth/login', this.state.user)
                .then(res => {
                    console.log('response', res.data.token)
                    localStorage.setItem('jwt', res.data.token);
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('user_id', res.data.id);
                    window.location.reload();
                    this.props.history.push('/recipes');                    
                })
                .catch(err => {
                    console.log(err);
                    alert("Login failed. Please check username and password.");
                })

            // axios call that gets the user id
        } 
    }

    // renders the login form component and passes it props
    render() {
        return (
            <div>
                <LoginForm
                    handleChanges={this.handleChanges}
                    submitLogin={this.handleSubmit}
                    user={this.state.user}
                />
            </div>
        )
    }
}

export default LoginPageView;