const mongoose= require("mongoose")

const userSchima= mongoose.Schema({
   name: String,
   email: String,
   password: String

},)


const UserModule= mongoose.model("user",userSchima)

module.exports={
    UserModule
}