const express = require('express');
const { createFolder } = require('../controllers/userActionController');
const router = express.Router();

router.post('/create/folder',createFolder)

module.exports = router;