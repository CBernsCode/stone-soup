import React, { Component } from 'react';

import Chat from './Chat.js';
import Recipes from './Recipes.js';
import firebase from './firebase.js';
import './App.css';
import UserProvider from './UserProvider.js';
import MessageProvider from './MessageProvider.js';
import GroupProvider from './GroupProvider.js';




import Footer from './Footer.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <div>
          <Sidebar />
          <Recipes recipes={recipes}/> 
          <Chat messages={msgs}/>
          </div>
        <Footer />
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
  time: "124"
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
