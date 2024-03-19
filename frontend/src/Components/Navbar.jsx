import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";

const Navbar = () => {
      const [{basket}]= useStateValue();
      const navigate=useNavigate();
      const token= localStorage.getItem("user"); 

      useEffect(()=>{

      },[token])
  return (
    <div> 
      <div className="Container">
        <div className="Inner">
          <div className="Logo">
            <img onClick={()=>navigate("/")} src="./amazon_logo1.png" alt="logo" />
          </div>
          <div className="SearchBar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="SearchIcon" onClick={()=>navigate("/addproduct")}>
           
            <img src="./searchIcon.png" alt="" />
          </div>
          <div className="RightContainer">
            <div className="NavButton">
              <p>Hello,</p>
              <p>Guest</p >
            </div>
            <div  className="NavButton">
              <p onClick={()=>navigate('/order')}>Orders</p>
              {token? (<p className="logout-btn" onClick={()=>{
                localStorage.removeItem('user')
                navigate('/')
              }}>Logout</p>):(<p onClick={()=>navigate('/login')}>SignIn</p>)}
            </div>
            <div className="BasketButton" onClick={()=>navigate("/checkout")}>
              <img src="./basket-icon.png" alt="" />
              <p style={{color:"white"}}>{basket?.length}</p>
                       
            </div>
            
          </div>
          <div className="RightContainer"> </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
