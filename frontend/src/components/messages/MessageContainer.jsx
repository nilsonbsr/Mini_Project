import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useEffect } from'react'

const NoChatSelected = () =>{
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
                <p>Select a chat to start conversation</p>
            </div>
        </div>
    )
}

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text '> To:</span>{" "}
						<span className='text-white font-bold'>{selectedConversation.username}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer




/* const MessageContainer = () => {
    return (
      <div className='md:min-w-[450px]
                      flex
                      flex-col'>
  
      <>
          <div className='bg-slate-500 
                           px-4 py-2
                           mb-2'>
              <span className='label-text px-1'>To:</span>{""}
              <span className='text-white font-semibold'>Ghost</span>
  
          </div>
      
          <Messages />
          <MessageInput />
      </>
      
      </div>
    )
  }
  
  export default MessageContainer */