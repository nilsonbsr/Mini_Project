import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

// create a provider 
export const SocketContextProvider = ({ children }) => {
    // const socket = new WebSocket("ws://localhost:3000");

    // create socket connection default value
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()


    useEffect(() => {
        if (authUser) {
            const socket = io("https://ichat-without-borders.onrender.com", {
                query: { userId: authUser._id },
            })

            setSocket(socket)


			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
