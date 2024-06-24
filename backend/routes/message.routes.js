import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
import { getMessage } from '../controllers/message.controller.js';

// create Router
const router = express.Router();

// get msg
router.get("/:id", protectRoute, getMessage)

// send msg
router.post("/send/:id", protectRoute, sendMessage)






export default router
