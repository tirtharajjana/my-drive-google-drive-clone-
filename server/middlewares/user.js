const Folder = require('../models/folder')
const mongoose = require('mongoose');

const checkFolder = async (req, res, next) => {
    const userid = req.headers.userid;
    const { parentId, currentFolderId } = req.params;
    // console.log(parentId);
    if (parentId) {
        if (!mongoose.Types.ObjectId.isValid(parentId)) return res.status(404).json({ message: `No folder found, Your act is suspicious` });
        const folder = await Folder.findById(parentId)
        if (folder?.userId === userid) {
            next();
        }
        else {
            // console.log(folder);
            return res.status(404).json({ message: "You are not authorised" });
        }
    }
    else if (currentFolderId) {
        if (!mongoose.Types.ObjectId.isValid(currentFolderId)) return res.status(404).json({ message: `No folder found, Your act is suspicious` });
        const folder = await Folder.findById(currentFolderId)
        if (folder?.userId === userid) {
            next();
        }
        else {
            // console.log(folder);
            return res.status(404).json({ message: "You are not authorised" });
        }
    }

}

module.exports = checkFolder;