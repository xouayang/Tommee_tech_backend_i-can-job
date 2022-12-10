const mongoose = require('mongoose')
const rulesSchema = new mongoose.Schema({
    title:{
     type:String
    },
    description:{
        type:String
    }
},{timestamps:true})
const rule = mongoose.model('Rules', rulesSchema)
module.exports = rule