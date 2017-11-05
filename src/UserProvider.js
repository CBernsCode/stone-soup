import firebase from './firebase.js'

    class UserProvider{
        constructor(){     
            this.ref = firebase.database().ref('user/');
        }
        getUser(id){
            return new Promise((resolve, reject) => {
                var newref = this.ref.child(id);
                newref.once('value', snap => {resolve(snap.val())});    
            });
        }
        sendUser(id){
            this.ref.push(id);
        }
    }

export default  UserProvider;

