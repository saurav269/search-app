

  const mongoose = require('mongoose')

  const connection = mongoose.connect("mongodb+srv://saurav:mallik@cluster0.5bromki.mongodb.net/companyData?retryWrites=true&w=majority")

  module.exports = {connection}