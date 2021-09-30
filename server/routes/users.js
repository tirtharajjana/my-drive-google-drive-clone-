const express = require('express');
const router = express.Router();

const { signin, signup, getUserDetails } = require('../controllers/userController')

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id/detail', getUserDetails);

module.exports = router;