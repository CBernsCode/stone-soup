var recipe = [
  {
    title: "Lobster Roll",
    ingredients: [
      {
        quantity: 4,
        name: "split and lightly toasted rolls"
      },
      {
        quantity: 4,
        name: "cooked lobsters (1/2 pounds of meat)"
      },
      {
        quantity: 1/2,
        name: "cup mayonnaise"
      },
      {
        quantity:3,
        name:"tablespoons of lemon juice"
      },
      {
        quantity:2,
        name:"chopped celery stalks"
      },
      {
        quantity:2,
        name:"chopped parsley leaves"
      },
      {
        name:"some salt and pepper"
      },
      {
        name:"melted butter"
      }
    ],
    img: "http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg",
    servings: 4,
    tags: [
      "seafood"
    ],
    instructions: [
      "Remove the meat from the lobsters, chopping any large chunks into bite-size pieces.",
      "In a bowl, combine the lobster meat, mayonnaise, lemon juice, celery, parsley, and salt & pepper to taste.",
      "Place the lobster salad in the refridgerator for 5 to 10 minutes to allow the salad to absorb the flavorings.",
      "Brush cut sides of the rolls with melted butter and fill with the lobster salad."
    ]
  },
  {
    title: "Spicy Chili",
    ingredients: [
      {
        quantity: 2,
        name: "Lbs of ground beef"
      },
      {
        quantity: 16,
        name: "Ounces rinsed & drained kidney beans (2 cans)"
      },
      {
        quantity: 14.5,
        name: "Ounces of diced & drained tomatoes (2 cans)"
      },
      {
        quantity: 8,
        name: "Ounces of tomato sauce (1 can)"
      },
      {
        quantity: 2,
        name: "Chopped onions"
      },
      {
        quantity: 1,
        name: "Chopped green bell pepper"
      },
      {
        quantity: 2,
        name: "cloves of minced garlic"
      },
      {
        quantity: 3,
        name: "tablespoons of chili powder"
      },
      {
        quantity: 1,
        name: "tablespoon of cayenne pepper"
      },
      {
        quantity: 2,
        name: "teaspoons of salt"
      },
      {
        quantity: 1,
        name: "teaspoon of ground black pepper"
      },
      {
        quantity: 1/2,
        name: "cup of shredded cheddar cheese"
      }


    ],
    img: "https://assets.epicurious.com/photos/578d20a00103fcdb27360fe8/master/pass/beef-and-bean-chili.jpg",
    servings: 10,
    tags: [
      "meat",
      "spicy"
    ],
    instructions: [
      "Heat a large skillet over medium-high heat and stir in ground beef. Cook the beef about 7 minutes. Drain and discard any excess grease.",
      "Combine all ingrediants but the cheese in a slow cooker. Cover and cook on Low for 10 hours, or High for 4 hours.",
      "Garnish with chedder cheese"
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
        name: "some salt and pepper"
      },
      {
        quantity: 1,
        name: "teaspoon of butter"
      },
      {
        quantity: 1/4 ,
        name: "cup of filling of choice (shredded cheese, diced vegetables, chopped ham)"
      }
    ],
    img: "https://www.incredibleegg.org/wp-content/uploads/basic-french-omelet-930x550.jpg",
    servings: 1,
    tags: [
      "eggs",
      "dairy"
    ],
    instructions: [
      "beat eggs, salt and pepper in small bowl until blended.",
      "heat butter over a medium-high heat in a nonstick frying pan and tilt the pan to fully coat it",
      "pour in egg mixture when the pan is hot",
      "gently push cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface.",
      "continue cooking, tilting pan and gently moving cooked portions as needed.",
      "Top with cheese on half of the omelet when there is no visible liquid egg",
      "fold the omelet and serve."
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
