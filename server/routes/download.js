const router = require('express').Router();
const File = require('../models/file');
const download = require('download');


router.get('/:uuid', async (req, res) => {
    // console.log("get");
    const uuid = req.params.uuid;
    // Extract link and get file from storage send download stream 
    const file = await File.findById(uuid);
    // Link expired
    if (!file) {
        return res.render('download', { error: 'Link has been expired.' });
    }
    // const response = await file.save();
    const fileName = file.name;
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath, fileName, (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
});


module.exports = router;