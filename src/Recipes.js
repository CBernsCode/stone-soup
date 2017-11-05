import React, { Component } from 'react';
import './Recipes.css'
import firebase from './firebase.js';
import RecipeProvider from './RecipeProvider.js'

class Recipes extends Component{

  render(){
      return (
        <section  className="col-md-9">
            <h2>Recipes</h2>
            <div id="recipes">

            </div>
        </section>
      )
  }
}

class Recipe extends Component{
  render(){
    return(
      <div className="recipe col-md-6">
        {this.props.name}
        <div className="thumbnail">
          <img  src={this.props.img} />
        </div>
        <ul>
          {
            this.props.ingredients.map((x) => {
              return (
                <li>{x.quantity} - {x.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default Recipes;
