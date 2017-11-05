import React, { Component } from 'react';
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
    return (
      <div >
        <h3>Users</h3> 
        <ul className="list-group "> 
        <li className="list-group-item list-group-item-danger">Item</li>
        <li className="list-group-item list-group-item-info">Item</li>
        <li className="list-group-item list-group-item-success">Item</li>
        </ul>
      </div>
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
