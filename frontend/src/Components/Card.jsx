import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import "../CSS/Card.css";
import { colors } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate= useNavigate()
  // console.log("Basket>>>>>>", basket);
  const handleCart = (e) => {
       const token=localStorage.getItem('user');
       console.log(token, "token")
    if(token==null){
      alert("Please Login First");
      window.location="/login"
    }else{
     
      navigate("/")
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: e,
    });


  };


  return (
    <div>
      <div className="Container-Main">
        <div className="Container-img">
          <img src={item?.image} alt="image" />
          
        </div>
        <div className="Description">
          <h5>{item?.title}</h5>
          <Rating
          className="Item-rating"
            name="half-rating-read"
            defaultValue={item?.rating}
            precision={0.5}
            readOnly
          />
          <p style={{ color: "black" }}>₹ {item?.price}</p>
          <button className="button-btn" onClick={() => handleCart(item)} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
