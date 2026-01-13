import express from 'express';
import { getMe, login, logout, register } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
// import { register, login, getMe, logout } from '../controllers/authController.ts';
// import { protect } from '../middleware/auth.ts';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

export default router;