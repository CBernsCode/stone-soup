import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RecipeProvider from './RecipeProvider.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/*
  Test RecipeProvider
*/

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
  rProv.getRecipe("-Ky8MbZFcEOQjBD3dPwV").then((result) => {
    expect(result.title).toMatch("Pizza");
  });
});
