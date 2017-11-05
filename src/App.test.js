import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RecipeProvider from './RecipeProvider.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

function add(x, y){
  return x + y;
}

it("add equals 4", () => {
  expect(add(2,2)).toEqual(4);
});

/*
  Test RecipeProvider
  (Currently not working)
*/
/*
var recipe = {
  title: "Pizza",
  id: 42,
  ingredients: [
    {
      quantity: 1,
      name: "cheese"
    },
    {
      quantity: 1,
      name: "dough"
    }
  ]
};

it("getRecipe returns correct recipe", () => {
  var rProv = new RecipeProvider();
  expect(() =>{
    rProv.getRecipe("-Ky8MbZFcEOQjBD3dPwV").then((result) => {return result.title;});
  }).toMatch("Pizza");
});
*/
