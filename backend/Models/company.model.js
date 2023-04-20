

  const mongoose = require('mongoose')

  const companySchema = mongoose.Schema({
    name : {type : String, required : true},
    companyId : {type :  Number, reuired : true},
    url : {type : String, reuired : true},
    primaryText : {type : String, reuired : true},
    headline : {type : String, reuired : true},
    description : {type : String, reuired : true},
    CTA : {type : String, reuired : true},
    imageUrl : {type : String, reuired : true}, 
  },{
    versionKey :  false
  })

  const CompanyModel = mongoose.model('ads', companySchema)

  module.exports = {CompanyModel}