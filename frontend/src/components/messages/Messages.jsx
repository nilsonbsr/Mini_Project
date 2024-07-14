/* import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages, loading} = useGetMessages()
  //console.log("messages:", messages)

  //listen for any incoming messages from socket
  useListenMessages()
  return (
    <div className='px-4 flex-1 overflow-auto'>
      

        {!loading && messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
        
        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
    

        {!loading && messages.length === 0 && (
          <p className='text-center'>Bro just send them a message!</p>
        )}



    </div>
  )
}

export default Messages */

import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";

import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();



	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;