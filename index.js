const express= require("express")
const Connection= require("./Config/db")
const {ProductRouter}=require("./routes/Product.route")
const cors= require("cors")


const app= express()
app.use(cors())
app.use(express.json())
app.use(ProductRouter)


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Api app")
})


// app.listen(5000,()=>{
//     console.log("server ")
// })


app.listen(process.env.port,async()=>{
    await Connection
     console.log("server is running")
     try {
        console.log("db is connected")
     } catch (error) {
       console.log("db is not connected")  
     }
})