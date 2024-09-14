// /routes/matchRoutes.js
import express from 'express';
import { getMatches } from '../controllers/matchController.js';

const router = express.Router();

// Route to get matches for a user
router.get('/:userId/', getMatches);

export default router;
