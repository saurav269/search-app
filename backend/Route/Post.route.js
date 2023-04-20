const { CompanyModel } = require("../Models/company.model")

const express = require("express")
const postRouter = express.Router()

  postRouter.post('/', async(req,res) =>{

    try{

        const company = new CompanyModel(req.body)
        await company.save()
        res.send("Data has been added to Db")
    }catch(err){
        console.log(err)
    }
  })

  module.exports = {postRouter}