import React, { Component } from 'react';
import UserProvider from './UserProvider.js'
import RecipeProvider from './RecipeProvider.js'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <UserSideBar users={this.props.users} host={this.props.host}/>
        <IngredientsSideBar recipe={this.props.recipes}/>
      </div>
    )
  }
}

class UserSideBar extends Component{
  render(){
   var uProv = new UserProvider();
   var users = uProv.getUsersByIds(this.props.users)
    return (
      <div >
        <h4> Host: <span className="small">{uProv.getUser(this.props.host).name}</span></h4>
        <h4>Users: <span className="small">aka Thunder Buddies</span></h4>
        <ul className="list-group ">
          {
            users.map((usr, index) => {
              return (
                <User key={index} name={usr.name} />
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
    var rProv = new RecipeProvider();
    var recipes = rProv.getIngredients(this.props.recipe)
    var list = []
    recipes.map((x) =>{
      x.map((y) => {
        list.push({
          quantity: y.quantity,
          name: y.name
        })
      })
    })
    return (
      <div> 
        <h3>Shopping List</h3>
        <ul className="list-group "> 
          {
            list.map((x) => {
              return(
                <ShoppingItem quantity={x.quantity} name={x.name} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class ShoppingItem extends Component{
  render(){
    return (
      <li className="list-group-item"><span class="badge">{this.props.quantity}</span>{this.props.name}</li> 
    )
  }
}

export default Sidebar;
