import React, { Component } from 'react';

import Chat from './Chat.js';
import Recipes from './Recipes.js';
import firebase from './firebase.js';
import './App.css';

import Footer from './Footer.js';
import Header from './Header.js';
<<<<<<< HEAD
import Sidebar from './Sidebar.js'
=======

>>>>>>> a6472cde4a3738491d6e74285982378310d553c1

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Header />
        <div>
          <Sidebar />
          <Recipes recipes={recipes}/> 
          <Chat messages={msgs}/>
          </div>
        <Footer />
=======
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
>>>>>>> a6472cde4a3738491d6e74285982378310d553c1
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
<<<<<<< HEAD
  time: "124"
}
=======
}

>>>>>>> a6472cde4a3738491d6e74285982378310d553c1
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
