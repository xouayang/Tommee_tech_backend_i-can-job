const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const app = express()
app.use(express.json({limit:'10mb', extends:true}))
app.use(express.urlencoded({limit:'10mb', extended:true}))
mongoose.set('strictQuery', true)
mongoose.connect(process.env.URLDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
} ).then(() => {
    console.log('Success')
}).catch((error) => {
    console.log({message:error.message})
})
const userRouter = require('./src/router/user.router')
app.use('/', userRouter)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})