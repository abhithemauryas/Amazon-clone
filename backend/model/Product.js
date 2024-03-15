const mongoose= require("mongoose")

const productSchime=  mongoose.Schema({
     title: String,
     image: String,
     price: Number,
     rating: Number
})

const productModel=mongoose.model("product", productSchime)

module.exports={
   productModel
}


