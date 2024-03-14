// CheckCard.jsx
import React from 'react';
import '../CSS/Checkout.css';
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckCard = ({ item }) => {
  console.log("Item:", item); // Log the item object to see its structure and properties
  
  const removeFromBasket=(e,id)=>{
    e.preventDefault()
    dispatch({
      type :"REMOVE_FROM_BASKET",
      id: id
    })
  }
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="Checkout-Product">
      <div className="Checkout-Image">
        <img src={item?.image} alt="Product" />
      </div>
      <div className="Description">
        <h4>{item?.title}</h4>
        <p>₹ {item?.price}</p>
        <button onClick={(e)=>removeFromBasket(e,item.id)} className='remove'>Remove</button>
      </div>
    </div>
  ); 
};

export default CheckCard;
