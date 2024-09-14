import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { checkJwt } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Get current user profile (protected route)
router.get('/profile', checkJwt, getUserProfile);

// Update user profile (protected route)
router.put('/profile', checkJwt, updateUserProfile);

export default router;
