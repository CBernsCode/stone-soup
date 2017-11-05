import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat.js';
import Recipes from './Recipes.js';
import firebase from './firebase.js';
import './App.css';

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
        <div className="container">
          <Recipes recipes={recipes}/>
          <Chat messages={msgs}/>
        </div>
      </div>
    );
  }
}

var msgs = [{
  message: "Hello world",
  time: "123"
},
{
  message: "Hello world",
  time: "124"
},
{
  message: "Hello world",
}

]

var recipes = [
  {
    name: "Lobstah Roll",
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    ingredients: [
      {
        quantity: 2,
        name: "eggs"
      },
      {
        quantity: "3lbs",
        name: "Flour"
      }
    ]
  },
  {
    name: "Lobstah Roll",
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  },
  {
    name: "Lobstah Roll",
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  }
  ,{
    name: "Lobstah Roll",
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  }
]

export default App;
