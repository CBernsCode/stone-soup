//import firebase from './firebase.js';

// some recipes
var recipe = [
  {
    title: "Lobster Roll",
    ingredients: [
      {
        quanitity: 1,
        name: "bread"
      },
      {
        quanitity: 1,
        name: "lobster"
      },
      {
        quanitity: 1,
        name: "mayonnaise"
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
        name: "ground beef"
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
        name: "American Cheese"
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
/*
  constructor(){
    this.ref = firebase.database().ref('recipe');
  }
*/

  // Get recipe from index
  getRecipe(id){
    return recipe[id];
    /*
    return new Promise((resolve, reject) => {
      this.ref.child(id).once('value', (snapshot) => {resolve(snapshot.val());});
    });
    */
  }

  // Gets n recipes
  getSomeRecipes(n){
    return recipe.slice(0, n);
    /*
    return new Promise((resolve, reject) => {
      this.ref.limitToFirst(n).once('value', (snapshot) => {resolve(snapshot.val());});
    });
    */
  }

  // Gets imageURL from ID
  getImageURL(id){
    return recipe[id].img;
    /*
    return new Promise((resolve, reject) => {
      this.ref.child(id).once('value', (snapshot) => {
        if(snapshot.val().imageURL){
          resolve(snapshot.val().imageURL);
        } else {
          // no image URL found, set to Lobster Roll
          resolve("http://www.seriouseats.com/images/2016/12/20161208-sous-vide-lobster-59-lobster-roll-duo.jpg");
        }
      }
    )});
    */
  }


  // Send a recipe to the database
  // Returns Firebase's randomly generated key
  sendRecipe(item){
    recipe.push(item);
    /*
    var saveRef = this.ref.push(item);
    var recipeKey = saveRef.key;
    console.log("Pushed recipe: " + recipeKey);
    return recipeKey;
    */
  }

  // delete recipe by ID
  /*
  deleteRecipe(id){
    this.ref.child(id).remove();
  }
  */

}

export default RecipeProvider;
