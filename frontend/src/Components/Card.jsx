import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import "../CSS/Card.css";
import { colors } from "@mui/material";
import { useStateValue } from "./StateProvider";

const Card = ({ item }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket>>>>>>", basket);
  const handleCart = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: e,
    });

  };
  // {
//   "_id": "65e77a6b86d8d01f743ed47b",
//   "title": "This is Rat",
//   "imageURl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9zVXSFtV0xTbTMQTaGyZYfO6fjDSKEzfpA&usqp=CAU",
//   "price": 250,
//   "rating": 4,
//   "__v": 0
// },

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
