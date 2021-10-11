const express = require('express');
const { createFolder, getFolders, getCurrentFolder, createFile } = require('../controllers/userActionController');
const checkFolder = require('../middlewares/user');
const router = express.Router();
const { upload } = require('../helpers/filehelper');

router.post('/create/folder', createFolder);
router.post('/create/file', upload.single('file'), createFile);
router.get('/folder/detail/:parentId', checkFolder, getFolders);
router.get('/currentFolder/detail/:currentFolderId', getCurrentFolder);



module.exports = router;