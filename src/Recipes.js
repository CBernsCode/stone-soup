import React, { Component } from 'react';
import './Recipes.css'

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
  render(){
    return (
      <section id="recipes" className="row">
        <div className="col-md-10">
          <h2>Recipes</h2>
          <div className="row">
          {this.props.recipes.map((x) => {
            return (
              <Recipe img={x.img} name={x.name} ingredients={x.ingredients}/>
            )
          })}
          </div>
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
        <img className="thumbnail" src={this.props.img} />
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