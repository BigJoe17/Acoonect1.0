import express from 'express';
import dotenv from 'dotenv';
import connect from './db/connect.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { auth } from 'express-openid-connect'; // Correctly import the auth function

const app = express();
const port = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.JWT_SECRET,
  baseURL: process.env.BASE_URL, // Ensure you have defined BASE_URL in .env
  clientID: process.env.CLIENT_ID, // Ensure you have defined CLIENT_ID in .env
  issuerBaseURL: process.env.ISSUER_BASE_URL, // Ensure you have defined ISSUER_BASE_URL in .env
};

// Initialize Auth0 middleware
app.use(auth(config));

// Base route to check authentication status
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Connect to the database
connect();

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
