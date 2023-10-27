
const express = require('express')
require('dotenv').config()

//file imports
const db = require("./config/db")
const userRoutes = require("./routes/user")

const app = express()
const PORT = process.env.PORT


//middlewares
app.use(express.json())

//routes
app.use("/user", userRoutes )

app.listen(PORT, ()=>{
    console.log("server is running at port:", PORT)
})