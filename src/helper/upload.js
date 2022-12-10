const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path')
/** uploading image */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname
        const splitName = fileExtension.split('.')
        const extension = splitName[splitName.length - 1]

        cb(null, uuidv4() + `.${extension}`)
    }
})
const upload = multer({ storage: storage });


const videoStorage = multer.diskStorage({
    destination: '../../videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});
const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
})

module.exports = {upload , videoUpload}