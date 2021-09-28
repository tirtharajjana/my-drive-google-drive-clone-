const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/user');

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
        console.error(error);
        return res.status(500).json({ message: "Something went wrong." });
    }
}
const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, firstName, lastName });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '30d' });

        return res.status(200).json({ result, token });

    } catch (error) {
        // console.error(error);
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = { signin, signup }