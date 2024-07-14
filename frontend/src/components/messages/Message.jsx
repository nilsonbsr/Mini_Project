import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

// take a message as a prop and consume it
const Message = ({message}) => {

  
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

  // check if the message is from us or other
	const fromMe = message.senderId === authUser._id;
	
	const chatSide = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const chatBg = fromMe ? "bg-green-500" : "";
  
 return (
		<div className={`chat ${chatSide}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profilePic} />
				</div>
			</div>
        <div className={`chat-bubble text-white${chatBg}`}> {message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> Seen at 12:46</div>

    </div>
  )
}

export default Message



/* const Message = () => {
    return (
      <div className='chat chat-end'>
          <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                  <img src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"} alt='bubble' />
              </div>
          </div>
          <div className='chat-bubble text-white bg-cyan-500'> Not leave it in Darkness</div>
          <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> Seen at 12:46</div>
  
      </div>
    )
  }
  
  export default Message */