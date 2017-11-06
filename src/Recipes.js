import React, { Component } from 'react';
import './Recipes.css'
import RecipeProvider from './RecipeProvider.js'

class Recipes extends Component{

  render(){
    const rProv = new RecipeProvider();
    var recipes = rProv.getRecipesByIds(this.props.recipes)
    console.log(recipes)
      return (
        <section  className="">
            <h2>Recipes</h2>
            <div id="recipes">
              {
                recipes.map((x) => {
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
      <div className="recipe">
        <div className="col-md-6">
        <h4>{this.props.title}</h4>
        Servings: {this.props.servings}<br />
        <img className="img-rounded" alt={this.props.title} src={this.props.img} />
        </div>
        <div className="col-md-6">
        <ul>
          {
            this.props.ingredients.map((x) => {
              let value = x.quantity ?  x.quantity : "-"
              return (
                <li><span class="quant-badge label label-success ">{value}</span> {x.name}</li>
              )
            })
          }
        </ul>
        <ol>
          {
            this.props.instructions.map((x) => {
              return ( <li> {x} </li> )
            })
          }
        </ol>
        </div>
      </div>
    )
  }
}
export default Recipes;
