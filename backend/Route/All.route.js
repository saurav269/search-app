

   const express = require('express')
const { CompanyModel } = require('../Models/company.model')

   const allRouter = express.Router()

   allRouter.get('/', async(req,res) =>{
        
    try{
        const data = await CompanyModel.find()
        res.send(data)
        console.log("Success")

    }catch(err){
        console.log(err)
    }
   })

   module.exports={allRouter}