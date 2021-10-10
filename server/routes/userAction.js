const express = require('express');
const { createFolder, getFolders, getCurrentFolder } = require('../controllers/userActionController');
const checkFolder = require('../middlewares/user');
const router = express.Router();

router.post('/create/folder', createFolder);
router.get('/folder/detail/:parentId', checkFolder, getFolders);
router.get('/currentFolder/detail/:currentFolderId', getCurrentFolder);



module.exports = router;