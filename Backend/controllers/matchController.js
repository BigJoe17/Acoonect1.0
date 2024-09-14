// /controllers/matchController.js
import User from '../models/userModel.js';
import { findMatches } from '../utils/matchAlgorithm.js';

// Get matches for a specific user
export const getMatches = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get all users from the database
    const allUsers = await User.find();

    // Find matches for the user
    const matches = findMatches(user, allUsers);

    // Send the matched users
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
