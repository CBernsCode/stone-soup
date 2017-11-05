import firebase from './firebase.js';

class RecipeProvider{

  constructor(){
    this.ref = firebase.database().ref('recipe');
  }

  // get recipe from database by ID
  // returns a promise
  getRecipe(id){
    return new Promise((resolve, reject) => {
      this.ref.child(id).once('value', (snapshot) => {resolve(snapshot.val())});
    });

  }

  // send a recipe to the database
  sendRecipe(item){
    this.ref.push(item);
  }

  // delete recipe by ID
  deleteRecipe(itemID){
    this.ref.child(itemID).remove();
  }

}

export default RecipeProvider;
