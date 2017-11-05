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
        <Landing />
        <div className="col-md-3">
          <Sidebar users={group.users} recipes={group.currentRecipes}/>
        </div>
        <div className="col-md-9">
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
