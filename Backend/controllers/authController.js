import User from '../models/userModels.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, major, interests, password, semester, bio } = req.body;
  
  try {
    const newUser = new User({ name, email, major, interests, password, semester, bio });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
};

// Login a user (handled by Auth0)
export const loginUser = (req, res) => {
  // This would typically redirect to Auth0 for login
  res.send('Login logic handled by Auth0');
};
