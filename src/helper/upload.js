const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

/** uploading image */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname
        const splitName = fileExtension.split('.')
        const extension = splitName[splitName.length - 1]
        console.log(file)

        // cb(null, uuidv4() + `.${extension}`)
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

module.exports = upload
