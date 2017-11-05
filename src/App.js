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
    const gProv = new GroupProvider();
    var group = gProv.getGroup(0);
    console.log(group)
    return (
      <div className="App">
        <Header />
        <div>
          <Sidebar users={group.users}/>
          <GroupInfo host={group.host} time={group.time} />
          <Recipes recipes={recipes}/> 
          <Chat messages={msgs}/>
          </div>
        <Footer />
      </div>
    );
  }
}

class GroupInfo extends Component {
  constructor() {
    super();
    this.getHost = this._getHost.bind(this);
  }
  _getHost(){
    var uProv = new UserProvider();
    return (<h3>Host: {uProv.getUser(this.props.host).name}</h3>)
  }
  render(){
    return (
      <div>
        {this.getHost()}
        <h3>Next Soup Group: {this.props.time.toString()}</h3>
      </div>
    )
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
