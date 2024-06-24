import User from '../models/user.model.js';


export const getUsersForUI = async function(req, res) {
    try{
        // get current authenticated user
       const loggedUserId = req.user._id
       const id = req.params.id

       // get the sender id
       //const senderId = req.user._id

       // get the receiver id
       //const receiverId = req.params.id

       // fetch all users from the database
        // find every user in the database but the one that is not equal to the loggedUser
        // const findUsers = await User.find() // here we can sent message to ourself
       const filterUsers = await User.find({_id: {$ne:loggedUserId}}, {password: 0})
       res.status(200).json({filterUsers})

    }catch(e){
        console.log("Error getting users for UI", e.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

// completed