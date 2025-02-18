import path from "path";
import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";


dotenv.config()

//const app = express()
const PORT = process.env.PORT || 5000;

//deployment
const __dirname = path.resolve()

// using middlewares
// allow us to extract fullname, username from auth.controllers/ request.body
app.use(express.json()) // to parse the incoming request with json payload (from req.body)
app.use(cookieParser()) // call this to be able to access the cookies

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// middleware for deployment - give us the absolute path 
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})


//app.get("/", (req, res) => {
// root route http://localhost:5000
//    res.send("Hello Niloo!")
// })



server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});

// original