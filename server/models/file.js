const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: { type: String, require: true },
    parentId: { type: String, require: true },
    userId: { type: String, require: true },
    type: { type: String, require: true },
    path: { type: String, require: true },
    size: { type: String, require: true },

}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);