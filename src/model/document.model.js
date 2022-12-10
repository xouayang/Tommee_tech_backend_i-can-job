const mongoose = require('mongoose')
const documentSchema = new mongoose.Schema({
    document_file:{
     type:String
    },
    title:{
     type:String
    },
    description:{
        type:String
    }
},{timestamps:true})
const document = mongoose.model('Files', documentSchema)
module.exports = document