const express = require('express');
const { createFolder, getFolders } = require('../controllers/userActionController');
const checkFolder = require('../middlewares/user');
const router = express.Router();

router.post('/create/folder', createFolder);
router.get('/folder/detail/:parentId',checkFolder, getFolders);



module.exports = router;