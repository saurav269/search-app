

  const express = require("express")
  const cors = require("cors")
const { connection } = require("./config/db")
const { postRouter } = require("./Route/Post.route")
const { getRouter } = require("./Route/Get.route")



  const app = express()

 
  app.use(express.json())
  app.use(cors())

  app.get("/", (req,res) =>{
    res.send("Welcome")
  })

  app.use('/company/add', postRouter)

  app.use('/', getRouter)
  
  app.listen(5000, async() =>{

    try{
        console.log('server is running on port 5000')
        await connection
        console.log('Connected to db')
    }catch(err){
        console.log(err)
    }
  })