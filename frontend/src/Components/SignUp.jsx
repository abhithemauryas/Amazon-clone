import React, { useState } from 'react'
import "../CSS/SignUp.css"
import { Navigate, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import axios from 'axios'

const SignUp = () => {
  const navigate =useNavigate()
  const  [{}, dispatch] = useStateValue();
  const [name, setName]= useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const baseurl = "https://difficult-crow-baseball-cap.cyclic.app";
   
  const fetchSignUpdata=async(e)=>{
    try {
      const signUpData={name,email,password}
      const config={
           headers:{
             "Content-Type":"application/json",
             Authorization: "Bearer your_token_here",
           }
      }
      const {data}= axios.post(`${baseurl}/signup`,signUpData,config)
      console.log(data);
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
  }

  
  return (
    <div className='signup-Container'>
 <div className='logo'><img src="./amazon_logo.png" alt="" />
    </div>
     <form action="" className='signup-FormContainer'>
       <h3>Sign-In</h3>
       <div className='InputContainer'>
        <p>Name</p>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="" id="" placeholder= "John Smith"/>
       </div>
       <div className='InputContainer'>
        <p>Email</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" placeholder= "example@gmail.com"/>
       </div>
       <div className='InputContainer'>
        <p>Password</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="" placeholder='Enter your password'/>
       </div>
       <button className='SignUp-Button' onClick={fetchSignUpdata}>Create Account in Amazon</button>
     
     
      </form> 
      <button className='Login-Button' onClick={() => navigate("/login")}>
        Back to Login
      </button>

    </div>
  )
}

export default SignUp