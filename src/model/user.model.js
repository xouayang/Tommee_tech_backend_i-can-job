const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   username:{
    type:String,
   } ,
   password:{
    type:String
   },
   position:{
    type:String
   },
   phone:{
    type:String
   },
  role:{
    type:String
  }
},{timestamps:true})
const newUser = mongoose.model('Users', userSchema)
module.exports = newUser