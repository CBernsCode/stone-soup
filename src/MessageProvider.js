import firebase from './firebase.js'

    class MessageProvider{
        constructor(){
            this.ref = firebase.database().ref('messages/')
        }
        getMessage(id){
            return new Promise((resolve, reject) => {
                var newref = this.ref.child(id);
                newref.once('value', snap => {resolve(snap.val())});    
            });
        }
        sendMessage(id){
            this.ref.push(id);
        }
    }

export default  MessageProvider;
