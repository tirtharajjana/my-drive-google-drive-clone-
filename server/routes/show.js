const router = require('express').Router();
const File = require('../models/file');
const mongoose = require('mongoose')

router.get('/:uuid', async (req, res) => {
    // console.log("jb");
    const uuid = req.params.uuid;
    try {
        if (!mongoose.Types.ObjectId.isValid(uuid)) return res.render('download', { error: 'No file found' });

        const file = await File.findById(uuid);
        // Link expired
        // console.log(file);
        if (!file) {
            return res.render('download', { error: 'Link has been expired.' });
        }
        return res.render('download', { uuid: file._id, fileName: file.name, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file._id}` });
    } catch (err) {
        console.log(err.message);
        return res.render('download', { error: 'Something went wrong.' });
    }
});


module.exports = router;