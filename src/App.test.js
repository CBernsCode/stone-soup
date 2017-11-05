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
  title: "Spicy Chili",
  ingredients: [
    {
      quantity: 99,
      name: "jalapenos"
    },
    {
      quantity: 1,
      name: "ground beef"
    }
  ]
};

it("getRecipe returns correct recipe", () => {
  var rProv = new RecipeProvider();
  var newRecipe = rProv.sendRecipe(recipe);
  rProv.getRecipe(newRecipe).then((result) => {
    var temp = result.title;
    rProv.deleteRecipe(newRecipe);
    expect(temp).toMatch("Spicy Chili");
  });
});

it("getSomeRecipes returns something", () => {
  var rProv = new RecipeProvider;
  rProv.getSomeRecipes(5).then((result) => {
    expect(temp).toBeDefined();
  });
});
