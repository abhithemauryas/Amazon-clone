import React, { useState,useMemo } from "react";
import Navbar from "./Navbar";
import Addres from "../CSS/Addres.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

const Address = () => {
  const [{}, dispatch] = useStateValue();
  const [fullName, setfullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setflat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const deliver = (e) => {
   if (!fullName || !phone || !area || !city || !state) {
      alert("Please fill in all required fields.");
      return;
    }
    e.preventDefault();

   

    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        phone,
        area,
        city,
        state,
      },
    });
    navigate("/payment");
  };

  

  console.log(fullName);
  return (
    <div className="Address-Container">
      <Navbar />
      <div className="Form-Main">
        <form action="" className="FormContainer">
          <div className="InputContainer">
            <p>Full Name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Full Name..."
              onChange={(e) => setfullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="InputContainer">
            <p>Phone Number</p>
   <input
    type="number"
    name=""
    id=""
    placeholder="Enter Mobile Number..."
    onChange={(e) => {
        const input = e.target.value;
        if (input.length <= 10) {
            setPhone(input);
        }
    }}
    value={phone}
/>
          </div>
          <div className="InputContainer">
            <p>Flat, House no., Building, Company, Apartment</p>
            <input
              type=""
              name=""
              id=""
              placeholder="Enter Flat, House no., Building, Company, Apartment Name..."
              onChange={(e) => setflat(e.target.value)}
              value={flat}
            />
          </div>{" "}
          <div className="InputContainer">
            <p>Area, Colony, Street, Sector, Village</p>
            <input
              type=""
              name=""
              id=""
              placeholder="Enter Area, Colony, Street, Sector, Village Name..."
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </div>{" "}
          <div className="InputContainer">
            <p>Landmark</p>
            <input
              type=""
              name=""
              id=""
              placeholder="Enter Landmark"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
          <div className="InputContainer">
            <p>Town/City</p>
            <input
              type=""
              name=""
              id=""
              placeholder="Enter Town/City Name..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="InputContainer">
            <p>State</p>
            <input
              type=""
              name=""
              id=""
              placeholder="Enter State Name"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
          <button onClick={deliver}>Deliver to this Address</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Address;
