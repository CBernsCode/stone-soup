import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat.js';
import './App.css';
import UserProvider from './UserProvider.js';
import MessageProvider from './MessageProvider.js';
import GroupProvider from './GroupProvider.js';




class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Stone Soup</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chat />
      </div>
    );
  }
}

export default App;
