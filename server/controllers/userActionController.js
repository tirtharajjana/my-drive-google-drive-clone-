const Folder = require('../models/folder')

const createFolder = async (req, res) => {
    const { name, parentId, userId } = req.body;

    try {
        const folder=await Folder.create({name, parentId, userId });
        console.log(folder);
        return res.status(200).json({ message: "Folder Created" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = { createFolder }