import React, { Component } from 'react';

import './App.css';

import NavBar from './Components/NavBar/NavBar';

class App extends Component {


  render() {
    return (
      <div className="App">

        <NavBar/>

       
        <header className="App-header">
          
          <p>
            Your secret family recipe cookbook!
          </p>
      
        </header>
      </div>
    );
  }
  
}

export default App;
