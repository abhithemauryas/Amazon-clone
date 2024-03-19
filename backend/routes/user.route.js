const mongoose= require("mongoose")
const express=require('express')
const  userRouter = express.Router()
const {UserModule}= require("../model/user.model")
const  jwt = require('jsonwebtoken');
const bcrypt= require("bcrypt")


userRouter.post("/signup", async(req,res)=>{
   const {name,email,password}= req.body;
   try {
       const  existingUser = await UserModule.findOne({ email: email })
        if (existingUser) return res.status(400).send("Email is already in use");
    bcrypt.hash(password,5,async(err,hash)=>{
        const user= new UserModule({name,email,password:hash})
        await user.save();
        console.log(user)
        res.status(201).send({"message":"User has been created!"});
    })
   } catch (error) {
    res.status(400).send({"msg":error.message})
   }

})

userRouter.post("/login", async (req, res) => {
        const { email, password } = req.body;
        try {
            const user= await UserModule.findOne({email});
            if(!user) return res.status(404).send({msg:"user is not found invalid email"})
            console.log("user",user)
            bcrypt.compare(password,user.password,(error,result)=>{
                if(result){
                    res.status(200).send({"msg":"User has beed login  successfully!", "token":jwt.sign({name:"batman"},"bruce")})
                }else{
                    res.status(400).send({"msg":"Wrong Password"})
                }
            })
        } catch (error) {
            res.status(400).send("Invalid Email or Password");
        }
})

module.exports={
    userRouter
}


