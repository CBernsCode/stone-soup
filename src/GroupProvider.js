import firebase from './firebase.js'

    class GroupProvider{
        constructor(){     
            this.ref = firebase.database().ref('group/')
        }
        getGroup(id){
            return groups[id]
        }
        sendGroup(group){
            group.id = groups.length
            groups.push(group)
        }
    }

    var groups = [
        {
            id: 1,
            users: [0,1],
            time: new Date(),
            host: 1,
            currentRecipes: [0, 1, 2],
            pastRecipes: [],
            pastMeetings: [],
            msgRef: 0
        }
    ]

export default  GroupProvider;