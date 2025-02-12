import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// User registration and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
