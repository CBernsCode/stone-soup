import firebase from './firebase.js'

    class GroupProvider{
        constructor(){     
            this.ref = firebase.database().ref('group/')
        }
        getGroup(id){
            return new Promise((resolve, reject) => {
                var newref = this.ref.child(id);
                newref.once('value', snap => {resolve(snap.val())});    
            });
        }
        sendGroup(id){
            this.ref.push(id);
        }
    }

export default  GroupProvider;