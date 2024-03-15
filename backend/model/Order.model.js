const mongoose= require("mongoose")

const orderSchima= mongoose.Schema({
    price: Number,
    product: 
        [
            {
                title: String,
                image: String,
                price: Number,
                rating: Number    
            },],
        
    
    email: String,
    address: Object
})


const OrderModel= mongoose.model("order", orderSchima)


module.exports={
    OrderModel
}