import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
        // if selectedconversation exists then access the _id property. 
        //If it doesn't exist the expression will return undefined or null instead of throwing an error
        if (selectedConversation?._id){
            getMessages()
        }

    }, [selectedConversation?._id, setMessages])

    return { loading, messages }

}

export default useGetMessages