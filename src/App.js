import React, { Component } from 'react';
import Chat from './Chat.js';
import Recipes from './Recipes.js';
import './App.css';
import UserProvider from './UserProvider.js';
import GroupProvider from './GroupProvider.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js'
import Landing from './Landing.js'

class App extends Component {
  render() {
    const gProv = new GroupProvider();
    var group = gProv.getGroup(0);
    return (
      <div className="App">
        <Header />
        <div className="logged-out">
          <Landing />
        </div>
        <div className="col-md-3 logged-in">
          <Sidebar users={group.users} recipes={group.currentRecipes}/>
        </div>
        <div className="col-md-9 logged-in">
          <GroupInfo host={group.host} time={group.time} />
          <Chat currUser={group.host} msgGroup={group.msgRef}/>
          <Recipes recipes={group.currentRecipes}/>
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
    return (<h4>Host: {uProv.getUser(this.props.host).name}</h4>)
  }
  render(){
    return (
      <div id="group-info">
        <h3>Next Soup Group: {this.props.time.toString()}</h3>
        {this.getHost()}
      </div>
    )
  }
}

export default App;
