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
<<<<<<< HEAD
      <section  className="col-md-9">
          <h2>Recipes</h2>
          <div id="recipes">
            {this.props.recipes.map((x) => {
              return (
                <Recipe img={x.img} name={x.name} ingredients={x.ingredients}/>
              )
            })}
          </div>
=======
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
>>>>>>> a6472cde4a3738491d6e74285982378310d553c1
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