import React, { useState } from 'react';
import "../CSS/Login.css"
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import axios from 'axios';


const Login = () => {
  const navigate= useNavigate()
  const [email, setEmail]=useState("")
  const [password, setPassword] = useState("")
  const [{}, dispatch]=useStateValue()
   
  const baseurl = "http://localhost:5000";

   
 
  const login=async(e)=>{
    try {
      e.preventDefault()
      const loginData ={email,password}

     const config={
       Headers:{
         "Content-Type":"application/json",
         Authorization: "Bearer your_token_here",
       },
     };
     const {data}= await axios.post(`${baseurl}/login`,loginData,config)
      console.log(data);
      navigate("/")
   } catch (error) {
     console.error("Error fetching client secret:", error);
   }
  
  }

  return (
    <div className='Login-Container'>
    <div className='logo'><img className='logo-img' src="./amazon_logo.png" alt="" />
    </div>
     <form action="" className='login-FormContainer'>
       <h3>Sign in</h3>
       <div className='InputContainer'>
        <p>Email</p>
        <input type="email" name="" onChange={(e)=>setEmail(e.target.value)} id="" placeholder= "example@gmail.com"/>
       </div>
       <div className='InputContainer'>
        <p>Password</p>
        <input type="password" name="" onChange={(e)=>setPassword(e.target.value)} id="" placeholder='Enter your password'/>
       </div>
       <button className='Login-Button' onClick={login}>Login</button>
      <div className='InfoText'>By continuing, you agree Amazon's <span>Conditions of Use</span>and <span>Private Notice</span></div>
     
      </form> 
      <div className='SignupButton'>Create Account in Amazon</div>
    </div>
  )
}

export default Login