import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../CSS/Payment.css";
import CheckCard from "./CheckCard";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { navigate, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Footer from "./Footer";

const Payment = () => {
  const [{ address, basket }, dispatch] = useStateValue();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();

  const baseurl = "https://difficult-crow-baseball-cap.cyclic.app";

  const fetchClientSecret = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_token_here",
        },
      };

      const { data } = await axios.post(
        `${baseurl}/payment/create`,
        { amount: getBasketTotal(basket) },
        config
      );

      setClientSecret(data.clintSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  const createorder = async () => {
    console.log(address);
    console.log("pay basket", basket);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_token_here",
        },
      };
      console.log("pay" , basket)
      const obj = {

        products: basket,
        price: getBasketTotal(basket),
        address: address,
        email: "email",
      };
      const { data } = await axios.post(`${baseurl}/order/add`, obj, config);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();

    console.log("Client Secret:", clientSecret); // Check the value of clientSecret before confirming payment

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async (result) => {
        alert("Payment Successful");
        await createorder();
        navigate("/");
        dispatch({
          type: "EMPTY_BASKET",
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };


  return (
    <div className="Payment-Container">
      <Navbar />
      <div className="Pay-Main">
        <div className="Review">
          <h2>Review Order</h2>
          <div className="Address-Container">
            <h5>Shipping Address</h5>
            <div className="Address-Container-div">
              <p>{address.fullName}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>
                {address.city} {address.state}
              </p>
              <p>Phone: {address.phone}</p>
            </div>
            <div className="Payment-Container">
              <h5>Payment Method</h5>
              <div>
                <p>Card Details</p>
                <CardElement />
              </div>
            </div>
            <div className="Order-Container">
              <h5>Your order</h5>
              <div>
                {basket && basket.map((item) => <CheckCard item={item} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="Subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket.length} item) :<strong> {value}</strong>
                </p>
                <div className="small">
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </div>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />
          <button className="Proceed-Button" onClick={confirmPayment}>
            Place Order
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;
