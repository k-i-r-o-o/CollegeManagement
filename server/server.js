//call dotenv config function
require('dotenv').config()

const express=require('express')
const app=express()
const mongoose=require('mongoose') // HERE WE IMPORTED MONGOOSE!!!!!!!!!!!!!!


//Import the particular router from respective .js file from routes folder here

const userRouter=require('./routes/user')

/*
// global middleware
app.use((req,res,next) => {
console.log(req.path, req.method)
// calling next tells the control to go to next middlewares
next()
})
*/

app.use(express.json()) // HERE WE ADDED IT!!!!!!!!!!!!!!!!!!!!!!!

app.use('/api/user',userRouter)

// SET IF WE WANT STRICT SCHEMA OR NOT
mongoose.set('strictQuery', true)
// DB CONNECT HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
mongoose.connect(process.env.MONGO)
  .then(()=>{
  // LISTEN TO REQUESTS ON SERVER AFTER CONNECTING TO DB !!!!!!!!!!!!!!!!!!!!!!!!!
  app.listen(process.env.PORT, () => {
 console.log(` already connected to DB & now listeneing on port ${process.env.PORT}!!!`)

})
  
})
  .catch((error)=>{
  console.log(error)
})

