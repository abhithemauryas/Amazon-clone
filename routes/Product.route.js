const express= require("express")
const ProductRouter=express.Router()
const mongoose =require("mongoose")
const {productModel}= require("../model/Product")



ProductRouter.post("/product",async(req,res)=>{
    try {
        const {title,image,price,rating}=req.body
        console.log(req.body)
        let newProduct= new productModel({title,image,price,rating})
        await newProduct.save()
        res.status(200).send({"message":"New Product is added"})
    } catch (error) {
       res.status(400).send({"message": error}) 
    }
})

ProductRouter.get("/product",async(req,res)=>{
      try {
       const  products=await productModel.find()
       res.status(200).send({"msg":"This is your product",data: products})
       
      } catch (error) {
       res.status(400).send({"msg":"errror", error}) 
      }
})



module.exports={
    ProductRouter
}
