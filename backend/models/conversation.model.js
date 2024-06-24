import mongoose from "mongoose";

// create conversation Schema
const conversationSchema = new mongoose.Schema({
   participants: [ {
    type: mongoose.Schema.Types.ObjectId,
     ref: "User",
   }
   ],
   // store message 
   messages: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    default:[],
   }
   ],
}, {timestamps:true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;

