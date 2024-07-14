import { Server } from "socket.io";
import http from "http";
import express from "express";
 

const app = express();

// having http server and passing user events
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};



const userSocketMap = {}; 

// listener socket
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

    // go to SocketContext and got the query string
	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// send event to all connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// listen to events- delete the user id after disconnecting
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };


