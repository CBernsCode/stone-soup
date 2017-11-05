import firebase from './firebase.js';

class RecipeProvider{

  constructor(){
    this.ref = firebase.database().ref('recipe');
  }

  // Get recipe from database by ID
  // Returns a Promise
  getRecipe(id){
    return new Promise((resolve, reject) => {
      this.ref.child(id).once('value', (snapshot) => {resolve(snapshot.val());});
    });
  }

  // Gets n recipes
  // Returns a Promise
  getSomeRecipes(n){
    return new Promise((resolve, reject) => {
      this.ref.limitToFirst(n).on('value', (snapshot) => {resolve(snapshot.val());});
    });
  }


  // Send a recipe to the database
  // Returns Firebase's randomly generated key
  sendRecipe(item){
    var saveRef = this.ref.push(item);
    var recipeKey = saveRef.key;
    console.log("Pushed recipe: " + recipeKey);
    return recipeKey;
  }

  // delete recipe by ID
  deleteRecipe(id){
    this.ref.child(id).remove();
  }

}

export default RecipeProvider;
