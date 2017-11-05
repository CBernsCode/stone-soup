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
    return (
      <div className="App">
        <Header />
        <div>
          <Sidebar users={group.users}/>
          <GroupInfo host={group.host} time={group.time} />
          <Recipes recipes={group.currentRecipes}/> 
          <Chat currUser={group.host} msgGroup={group.msgRef}/>
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

export default App;
