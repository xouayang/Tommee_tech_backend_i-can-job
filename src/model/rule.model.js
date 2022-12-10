const mongoose = require('mongoose')
const rulesSchema = new mongoose.Schema({
    file_document:{
        type:String
    },
    title:{
     type:String
    }
},{timestamps:true})
const rule = mongoose.model('Rules', rulesSchema)
module.exports = rule