import React from 'react';
import axios from 'axios';

import SignUpForm from './SignUpForm';

class SignUpPageView extends React.Component {
    state = {
        login: {
            username: '',
            password: ''
        }
        
    };


    // event handler that updates the form fields when it is changed by the user
    handleChanges = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            } 
        });
    }

    
    handleSubmit = event => {
        event.preventDefault();

        // some error checking
        if (!this.state.login.username || !this.state.login.password) {
            alert("Please provide a username and password.");
        } else {
            // axios call that posts the user login info (username & password) to the backend users table
            axios
            .post('backend api address', this.state.login)
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
                    login={this.state.login}
                />
            </div>
        )
    }
}

export default SignUpPageView;