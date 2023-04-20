

   const express = require("express")
   const { CompanyModel } = require("../Models/company.model")

   const getRouter = express.Router()

   getRouter.get('/', async(req,res) =>{

    const name = req.query.name || "" 
        try{
            const products = await CompanyModel.find({
                name : {$regex : name}
            })
            res.send(products)
        }catch(err){

            console.log(err)
            res.send(err)
        }
   })

   module.exports = {getRouter}