import React, { Component } from 'react';
import './Recipes.css'
import RecipeProvider from './RecipeProvider.js'

var obj = [
  {
    name: "some name",
    ingredients: {
      quantity: 2,
      name: "egg"
    }
  },
  {
    name: "some name",
    ingredients: {
      quantity: 2,
      name: "egg"
    }
  }
]

class Recipes extends Component{
  constructor() {
    super();
    var rProv = new RecipeProvider();
    this.state = {
      recipes: []
    }
  }
  componentDidMount(){

    var rProv = new RecipeProvider();
    rProv.getRecipe("-Ky8MbZFcEOQjBD3dPwV").then((result) => {
      this.setState({recipe: result})}
    ).then(() => {console.log(this.state.recipe)}
  )
    
  }
  render(){

      return (
        <section  className="col-md-9">
            <h2>Recipes</h2>
            <div id="recipes">
              {this.props.recipes.map((x) => {
                return (
                  <Recipe img={x.img} name={x.name} ingredients={x.ingredients}/>
                )
              })}
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