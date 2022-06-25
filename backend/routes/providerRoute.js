import e from 'express';
import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { registerProvider, loginProvider, getProvider } from '../controllers/providerController.js';
const router = express.Router();

router.post('/', registerProvider);
router.post('/login', loginProvider);
router.get('/me', protect, getProvider);

export default router;