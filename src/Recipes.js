import React, { Component } from 'react';
import './Recipes.css'
//import firebase from './firebase.js';
import RecipeProvider from './RecipeProvider.js'

class Recipes extends Component{

  render(){
    const rProv = new RecipeProvider();
    var recipes = rProv.getRecipesByIds(this.props.recipes)
    console.log(recipes)
      return (
        <section  className="col-md-9">
            <h2>Recipes</h2>
            <div id="recipes">
              {
                recipes.map((x) => {
                  console.log(x);
                  return(
                    <Recipe img={x.img} title={x.title} alt={x.title} ingredients={x.ingredients}
                    instructions={x.instructions}
                    servings={x.servings}/>
                  )
                })
              }
            </div>
        </section>
      )
  }
}

class Recipe extends Component{
  render(){
    return(
      <div className="recipe col-md-6">
        <h4>{this.props.title}</h4>
        Servings: {this.props.servings}
        <div className="thumbnail">
          <img  alt={this.props.title} src={this.props.img} />
        </div>
        <ul>
          {
            this.props.ingredients.map((x) => {
              return (
                <li>{x.quantity} {x.name}</li>
              )
            })
          }
        </ul>
        <ol>
        {this.props.instructions.map((x) => {
          return (
            <li>{x}</li>
          )
        })}
        </ol>
      </div>
    )
  }
}
export default Recipes;
