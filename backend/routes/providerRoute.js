const express = require('express');
const router = express.Router();
const { registerProvider, loginProvider, getProvider } = require('../controllers/providerController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerProvider);
router.post('/login', loginProvider);
router.get('/me', protect, getProvider);

module.exports = router;