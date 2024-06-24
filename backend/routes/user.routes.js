import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForUI } from '../controllers/user.controller.js';

const router = express.Router();

// always call protectedRoute to make sure that user is authenticated
router.get('/', protectRoute,getUsersForUI)


export default router