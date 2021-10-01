const express = require('express');
const router = express.Router();
const { upload } = require('../helpers/filehelper');
const { signin, signup, getUserDetails, uploadLogo } = require('../controllers/userController')

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id/detail', getUserDetails);
router.post('/upload/logo', upload.single('logo'), uploadLogo)

module.exports = router;