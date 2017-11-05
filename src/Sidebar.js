import React, { Component } from 'react';
import UserProvider from './UserProvider.js'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="col-md-3">
        <UserSideBar />
        <IngredientsSideBar />
      </div>
    )
  }
}


class UserSideBar extends Component{
  render(){
   var uProv = new UserProvider();
   var users = uProv.getAll()
    return (
      <div >
        <h3>Users</h3> 
        <ul className="list-group ">
          {
            users.map((usr) => {
              return (
                <User key={usr.id} name={usr.name} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <li className="list-group-item" key={this.props.key} > {this.props.name}</li>
    )
  }
}

class IngredientsSideBar extends Component{
  render(){
    return (
      <div> 
        <h3>Shopping List</h3>
        <ul className="list-group "> 
          <li className="list-group-item list-group-item-danger">Item<span class="badge">4</span></li>
          <li className="list-group-item list-group-item-info">Item</li>
          <li className="list-group-item list-group-item-success">Item</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
