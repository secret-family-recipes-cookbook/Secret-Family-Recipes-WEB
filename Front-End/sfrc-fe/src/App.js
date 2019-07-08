import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar/NavBar';
import SignUpPageView from './Components/SignUpPage/SignUpPageView';
import LoginPageView from './Components/LoginPage/LoginPageView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      isLoggedIn: '',
    };
  }

  componentDidMount() {
    console.log("comp mounting");
    this.hydrateStateWithLocalStorage();
   }

  hydrateStateWithLocalStorage() {
    console.log("hydrating");
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  logout = () => {
    console.log("logging out");
    this.logout_notify();
    localStorage.clear();
    this.setState({
    jwt: '',
    isLoggedIn: false,
    });
  }

  render() {
    return (
      <div className="App">

        <NavBar isLoggedIn={this.state.isLoggedIn} />

        <Route exact path="/signup"
          render={props => <SignUpPageView {...props} isLoggedIn={this.state.isLoggedIn} /> }
        />

        <Route exact path="/login"
          render={props => <LoginPageView {...props} isLoggedIn={this.state.isLoggedIn} /> }
        />
        
      </div>
    );
  }
  
}

export default App;
