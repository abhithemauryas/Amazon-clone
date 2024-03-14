
import './App.css';
// import styled from 'styled-components';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { useState } from 'react';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AddProduct from './Components/AddProduct';
import Orders from './Components/Orders';



 const promise = loadStripe(
  'pk_test_51OqKRnSB46VQlUclNAz4qXSS12nJEwLPwdKK1m860EbsA79RofKH6POog3RiYdyKO2kaxDQFrI4nqqcdrFriuw1l00j5IF2nUr'
 )
   
function App() {
 
  return (
    <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path='/address' element={<Address/>} />
          <Route path='/payment' element={ <Elements stripe={promise}>
                <Payment />
              </Elements>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/order" element={<Orders/>}/>
          
        </Routes>
    </Router>
  );
  


}


export default App;
