

   const express = require("express")
   const { CompanyModel } = require("../Models/company.model")

   const getRouter = express.Router()

   getRouter.get('/api/ads/search', async(req,res) =>{

      const {keyword} = req.query
        if(keyword){
          const newLine = [
            {$match :{$text :{$search : keyword}}},
            {$project : {
                _id : 1, 
                name : 1,
                url : 1,
                primaryText : 1,
                headline : 1,
                description : 1,
                CTA : 1,
                imageUrl : 1
            }},
            {$unwind : '$imageUrl'},
            {$sort : {name : 1}}
          ]
    
          try{
            const ads = await CompanyModel.aggregate(newLine)
            res.json(ads)
    
          }catch(err){
            console.log(err)
            res.send(err)
          }
        }else if(keyword==''){
          try{
            const data = await CompanyModel.find()
            res.send(data)
            console.log("Success")
    
        }catch(err){
            console.log(err)
        }

        }
     
   })

   module.exports = {getRouter}