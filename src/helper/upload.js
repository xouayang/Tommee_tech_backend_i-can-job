const multer = require('multer');
/** uploading image */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname
        cb(null, fileExtension)
    }
})
const upload = multer({ storage: storage });
module.exports = upload
