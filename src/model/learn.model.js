const mongoose = require('mongoose')
const learnSchema = new mongoose.Schema({
    video:{
        type:String
    },
    document:{
     type:String
    }
})