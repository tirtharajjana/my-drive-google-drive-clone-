const Folder = require('../models/folder');
const File = require('../models/file')
const User = require('../models/user');


const createFolder = async (req, res) => {
    const { name, parentId, userId, path } = req.body;
    // console.log(path);
    try {
        // console.log(`get a create req of ${name}`);
        const existingFolder = await Folder.findOne({ name, parentId });
        // console.log(existingFolder);
        if (existingFolder) return res.status(400).json({ message: "Folder already exist with this name." });
        const folder = await Folder.create({ name, parentId, userId, path });
        // console.log(folder);
        return res.status(201).json({ message: "Folder Created" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}
const createFile = async (req, res) => {
    const { parentId, userId } = req.body;

    try {
        // console.log("file");
        const name = req.file.originalname;
        const path = req.file.path;
        const fileType = req.file.mimetype;
        const size = req.file.size;
        var result = await User.findById(userId);
        var acquiredStorage = (result.acquiredStorage + size);
        // console.log(result.acquiredStorage + size);
        await User.findByIdAndUpdate(userId, { acquiredStorage })
        result = await File.create({ name, path, userId, parentId, fileType, size });

        console.log(result._id);
        res.status(201).json({ message: "File uploaded" });
    } catch (error) {
        return res.status(404).json({ message: "Something went wrong." });

    }
}

const getFolders = async (req, res) => {
    const { parentId } = req.params;

    // console.log(parentId);
    try {
        const result = await Folder.find({ parentId }).collation({ locale: "en" }).sort({ name: 1 });
        // console.log(result);
        return res.status(200).json({ result });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}
const getFiles = async (req, res) => {
    const { parentId } = req.params;

    // console.log(parentId);
    try {
        const result = await File.find({ parentId }).collation({ locale: "en" }).sort({ name: 1 });
        // console.log(result);
        return res.status(200).json({ result });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}
const getCurrentFolder = async (req, res) => {
    const { currentFolderId } = req.params;

    try {
        const result = await Folder.findById(currentFolderId);
        return res.status(200).json({ result });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = { createFolder, getFolders, getFiles, getCurrentFolder, createFile }