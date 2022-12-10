const mongoose = require('mongoose')
const learnSchema = new mongoose.Schema({
    video:{
        type:String
    },
    title:{
     type:String
    }
},{timestamps:true})
const learn = mongoose.model('Learns', learnSchema)
module.exports = learn