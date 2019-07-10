import React from 'react';
import axios from 'axios';

import SignUpForm from './SignUpForm';

class SignUpPageView extends React.Component {
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
                ...this.state.login,
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
            // axios call that posts the user login info (username & password) to the backend users table
            axios
            .post('https://anthony-secret-family-recipes.herokuapp.com/api/auth/register', this.state.user)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                this.props.isLoggedIn = true;   
            })
            .catch(err => {
                console.log(err);
                alert("Failed sign up attempt. That username might already exist.");
            })
        }
    }

    // renders the signup form component and passes it props
    render() {
        return (
            <div>
                <SignUpForm 
                    handleChanges={this.handleChanges}
                    submitLogin={this.handleSubmit}
                    login={this.state.user}
                />
            </div>
        )
    }
}

export default SignUpPageView;