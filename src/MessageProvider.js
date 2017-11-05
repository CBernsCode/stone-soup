import firebase from './firebase.js'
import UserProvider from './UserProvider.js'


class MessageProvider{

    getMessage(id, msgId){
        return messages[id][msgId];
    }
    newMsgGroup(id){
        messages.push(id)
        messages[id].push([])
    }
    sendMessage(id, msg, userId){
        const msgRef = firebase.database().ref(`/messages/${id}`)
        let time = new Date()
        time = (time.getMonth() + 1) + "/" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes();
        msg.time = time;
        let uProv = new UserProvider();
        let user = uProv.getUser(userId).name;
        console.log(user)
        msg.user = user;
        msgRef.push(msg)
    }
}

var messages = 
     [
        {text: "Some message", time:""},
        {text: "Some message", time:""}
    ]


export default  MessageProvider;
