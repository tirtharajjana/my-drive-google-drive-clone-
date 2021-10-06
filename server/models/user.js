const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    logoName: { type: String, require: false },
    path: { type: String, require: false },
    fileType: { type: String, require: false },
    totalStorage: { type: Number, default: 2 * 1024 * 1024 * 1024 },
    acquiredStorage:{type:Number,default:0},
    rootFolder:{ type: String, require: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);