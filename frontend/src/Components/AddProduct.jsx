import React, { useState } from "react";
import "../CSS/AddProduct.css"
import axios from "axios";

const AddProduct = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
const baseurl="https://difficult-crow-baseball-cap.cyclic.app/"
  const addproduct = async(e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header to specify JSON format
          'Authorization': 'Bearer your_token_here' // Include any authorization token if required
          // Add any other headers as needed
        }
      };
    
     const data= await axios.post(`${baseurl}/product`,{title,image,price,rating},config)
     alert('The Product has been added')
     console.log(data);
    } catch (error) {
      console.log(error)
    }
   
  };  
  return (
    <div className="addproduct-container">
      <div className="Logo">
        <img src="./amazon_logo.png" alt="" />
      </div>

      <form action="" className="form-container">
        <h3>Add Product</h3>
        <div className="input-container">
          <p>Title</p>
          <input
            type="text"
            name=""
            onChange={(e) => settitle(e.target.value)}
            id=""
            value={title}
          />
        </div>

        <div className="input-container">
          <p>imageUrl</p>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => setimage(e.target.value)}
            value={image}
          />
        </div>

        <div className="input-container">
          <p>Price</p>
          <input
            type="number"
            name=""
            id=""
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>



        <div className="input-container">
          <p>Rating</p>
          <input
            type="text"
            name=""
            onChange={(e) => setRating(e.target.value)}
            id=""
          />
        </div>

        <button className="Add-btn" onClick={addproduct}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
