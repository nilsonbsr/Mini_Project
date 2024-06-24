import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'

// send msgs btw users
export const sendMessage = async function(req, res) {
    
    try{
        // get message from user as input
        const {message} = req.body
        const {id: receiverId} = req.params

        // get the senderId using middleware
        const senderId = req.user._id

        // find all the conversation btw users sender and receiver
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        //create conversation
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                // messages: [message]
            })

        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // Socket.io functionality for real-time experience

        // save conversation and messages in database
        await conversation.save()
        await newMessage.save()
        res.status(201).json(newMessage)

    }catch(e){
        console.log("Error sending message", e.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

// get msgs btw two users 
export const getMessage = async function(req, res) {
    try{
        // rename id to userTooChatId
        const {id: userToChatId} = req.params
        const senderId = req.user._id

     
        // get conversation list btw two users
        const conversation = await Conversation.findOne({ 
            participants: {$all: [senderId, userToChatId] },
        
        })
        if (conversation){
            const messages = await Message.find({_id: {$in: conversation.messages}})

            /* const decryptedMessage = messages.map(message => {
                message.conversation(message.content)
                return message
            })
 */
            //conversation.messages = decryptedMessage
            conversation.messages = messages
        }
        if (!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages);
        
         

    }catch(e){
        console.log("Error sending message", e.message)
        res.status(500).json({error: "Internal Server Error"})
    }

}

// completed