const mongoose = require('../db/connection')


 const sneakerSchema= new mongoose.Schema({
     brand: String,
     name: {type: String, required: true},
     colorWay: String,
     img: String,
     condition: String,
     size: {type: Number},
     worn: {type: Number, min: 0}

 })

 const Sneakers = mongoose.model('Sneakers', sneakerSchema)
 module.exports = Sneakers