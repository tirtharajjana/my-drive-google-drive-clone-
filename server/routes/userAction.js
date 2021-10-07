const express = require('express');
const { createFolder, getFolders } = require('../controllers/userActionController');
const router = express.Router();

router.post('/create/folder', createFolder);
router.get('/folder/detail/:parentId', getFolders);



module.exports = router;