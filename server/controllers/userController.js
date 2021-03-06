const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = require('../models/user');
const Folder = require('../models/folder');

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User does not exist." });

        const checkPassword = await bcrypt.compare(password, existingUser.password);

        if (!checkPassword) {
            return res.status(400).json({ message: 'Invalid password.' })
        }



        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '30d' });

        return res.status(200).json({ result: existingUser, token })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}
const signup = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist." });

        if (password != confirmPassword) return res.status(400).json({ message: "Password & confirm password does not match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        var result = await User.create({ email, password: hashedPassword, firstName, lastName });;

        const folder = await Folder.create({ name: "Root", userId: result._id });

        await User.findByIdAndUpdate(result._id, { rootFolder: folder._id })

        result = await User.findById(result._id);

        // console.log(result);

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '30d' });

        return res.status(201).json({ result, token });

    } catch (error) {
        // console.error(error);
        return res.status(500).json({ message: "Something went wrong." });
    }
}

const getUserDetails = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "No user exist with this id" });

    const result = await User.findById(id);
    // log
    // console.log(result);
    return res.status(200).json(result);
}

const uploadLogo = async (req, res) => {
    try {
        // console.log(req.file);
        const logoName = req.file.originalname;
        const path = req.file.path;
        const fileType = req.file.mimetype;
        const id = req.body.id;


        await User.findByIdAndUpdate(id, { logoName, path, fileType });
        const result = await User.findById(id);
        // console.log(resu);
        return res.status(201).json(result);


    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
}

module.exports = { signin, signup, getUserDetails, uploadLogo }