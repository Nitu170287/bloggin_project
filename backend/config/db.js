
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(res =>{
    console.log("MongoDB connected")
}).catch(err =>{
    console.log(err)
})