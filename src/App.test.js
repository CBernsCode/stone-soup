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
  ],
  imageURL: "https://www.browneyedbaker.com/wp-content/uploads/2011/04/potato-salad-15-600.jpg"
};

var recipe2 = {
  title: "Omelette",
  ingredients: [
    {
      quantity: 2,
      name: "Farm-fresh eggs"
    },
    {
      quantity: 1,
      name: "American Cheese"
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

it("getImageURL returns correct URL", () => {
  var rProv = new RecipeProvider;
  var newRecipe = rProv.sendRecipe(recipe);
  rProv.getImageURL(newRecipe).then((result) => {
    var temp = result;
    rProv.deleteRecipe(newRecipe);
    expect(temp).toMatch("https://www.browneyedbaker.com/wp-content/uploads/2011/04/potato-salad-15-600.jpg");
  });
});

it("getImageURL returns correct URL when it doesn't have a URL field", () => {
  var rProv = new RecipeProvider;
  var newRecipe = rProv.sendRecipe(recipe2);
  rProv.getImageURL(newRecipe).then((result) => {
    var temp = result;
    rProv.deleteRecipe(newRecipe);
    expect(temp).toMatch("http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg");
  });
});
