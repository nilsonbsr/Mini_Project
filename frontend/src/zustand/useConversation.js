import { useState } from 'react'
import {create} from 'zustand'




// Define the state 
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages}),
}))




export default useConversation;




/* import { useState } from 'react'
import {create} from 'zustand'




// Define the state 
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages}),
}))







 */
export default useConversation;