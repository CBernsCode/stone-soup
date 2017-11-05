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
      this.ref.limitToFirst(n).once('value', (snapshot) => {resolve(snapshot.val());});
    });
  }

  // Gets imageURL from ID
  // Returns a Promise, as usual
  getImageURL(id){
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
