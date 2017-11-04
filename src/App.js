import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat.js';
import Recipes from './Recipes.js';
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
    name: "Cake",
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
    name: "Eggs",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  },
  {
    name: "Eggs",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  }
  ,{
    name: "Eggs",
    ingredients: [
      {quantity: 2,
      name: "eggs"
      }
    ]
  }
]

export default App;
