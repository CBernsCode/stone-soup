import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat.js';
import './App.css';

import Footer from './Footer.js';
import Header from './Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-sm-1"></div>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chat />
        <Footer />
      </div>
    );
  }
}

export default App;
