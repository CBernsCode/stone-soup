import firebase from './firebase.js'



class MessageProvider{
    constructor(){
        
    }
    getMessage(id, msgId){
        return messages[id][msgId];
    }
    getMessages(id){
        const thisRef = firebase.database().ref(`/messages/${id}`)
        thisRef.once('value').then((datasnapshot) => {
            return datasnapshot.val();
        })

    }
    newMsgGroup(id){
        messages.push(id)
        messages[id].push([])
    }
    sendMessage(id, msg){
        const msgRef = firebase.database().ref(`/messages/${id}`)
        let time = new Date().toISOString()
        msg.time = time;
        msgRef.push(msg)
    }
}

var messages = 
     [
        {text: "Some message", time:""},
        {text: "Some message", time:""}
    ]


export default  MessageProvider;
