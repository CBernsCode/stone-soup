var recipe = [
  {
    title: "Lobster Roll",
    ingredients: [
      {
        quantity: 8,
        name: "hot dog rolls"
      },
      {
        quantity: 1,
        name: "lb lobster"
      },
      {
        quantity: 1,
        name: "cup mayonnaise"
      }
    ],
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    servings: 1,
    tags: [
      "seafood"
    ],
    instructions: [
      "Cook lobster",
      "Put in roll"
    ]
  },
  {
    title: "Spicy Chili",
    ingredients: [
      {
        quantity: 99,
        name: "jalapenos"
      },
      {
        quantity: 1,
        name: "lb ground beef"
      }
    ],
    img: "https://assets.epicurious.com/photos/578d20a00103fcdb27360fe8/master/pass/beef-and-bean-chili.jpg",
    servings: 4,
    tags: [
      "meat",
      "spicy"
    ],
    instructions: [
      "Chop jalapenos",
      "Cook ground beef",
      "Simmer in pot for 48 hours"
    ]
  },
  {
    title: "Omelette",
    ingredients: [
      {
        quantity: 2,
        name: "Farm-fresh eggs"
      },
      {
        quantity: 1,
        name: "slice of American Cheese"
      }
    ],
    img: "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg",
    servings: 1,
    tags: [
      "eggs",
      "dairy"
    ],
    instructions: [
      "Scramble eggs",
      "Cook in frying pan",
      "Top with cheese"
    ]
  }
];

class RecipeProvider{


  // Get recipe from index
  getRecipe(id){
    return recipe[id];
  }

  // Gets n recipes
  getSomeRecipes(n){
    return recipe.slice(0, n);
  }

  // Gets imageURL from ID
  getImageURL(id){
    return recipe[id].img;
  }


  // Send a recipe to the database
  // Returns Firebase's randomly generated key
  sendRecipe(item){
    recipe.push(item);
  }

  getRecipesByIds(idArr){
    var arr = [];
    for(var i in idArr){
      arr[i] = recipe[idArr[i]];
    }
    return arr;
  }

  getIngredients(idArr){
    var arr = [];
    for(var i in idArr){
      arr.push(recipe[i].ingredients);
    }
    return arr;
  }

}

export default RecipeProvider;
