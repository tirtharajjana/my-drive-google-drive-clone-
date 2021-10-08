const Folder = require('../models/folder')
const mongoose = require('mongoose');

const checkFolder = async (req, res, next) => {
    const userid = req.headers.userid;
    const { parentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(parentId)) return res.status(404).json({message:`No folder found, Your act is suspicious`});
    const folder = await Folder.findById(parentId)
    if (folder?.userId == userid) {
        next();
    }
    else {
        return res.status(404).json({ message: "Something went wrong." });
    }

}

module.exports = checkFolder;