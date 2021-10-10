const mongoose = require('mongoose');

const folerSchema = mongoose.Schema({
    name: { type: String, require: true },
    parentId: { type: String, require: false },
    userId: { type: String, require: true },
    path: { type: [], require: false }
}, { timestamps: true });

module.exports = mongoose.model('Folder', folerSchema);