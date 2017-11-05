
    class UserProvider{
        getUser(id){
            return users[id];
        }
        sendUser(user){
            users.push(user);
        }
        getAll(){
            return users;
        }
        getUsersByIds(idArr){
            var retVal = []; 
            for(var i in idArr){
                retVal.push(users[i]);
            }
            return retVal;
        }
    }

var users = [
    {
        name: "Chris Berns",
        id: 0,
        prefs: {
            spicy: "true",
        },
        bio: "Chris enjoys long walks on the beach and cooking",
        allergies: [],
        location: {
            state: "Ma",
            city: "Peabody",
            address: "8 Beacon Blvd",
            zip: "01960"
        }
    },
    {
        name: "Marvin Fung",
        id: 1,
        prefs: {
            spicy: "true",
        },
        bio: "Marvin enjoys Chris",
        allergies: [],
        location: {
            state: "Ma",
            city: "Brocktown",
            address: "9 Mainn St",
            zip: "01360"
        }
    },
    {
        name: "Amy Mazzucotelli",
        id: 2,
        prefs: {
            spicy: "true",
            breakfast: "true"
        },
        bio: "I like sleep",
        allergies: ["pseudo milk"],
        location: {
            state: "Ma",
            city: "Westford",
            address: "9 Broadway St",
            zip: "321312"
        }
    }
]
export default UserProvider;

