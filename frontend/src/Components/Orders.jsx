import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Card from "../Components/Card"
import "../CSS/Orders.css"
import axios from 'axios'
import reducer from './Reducer'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./Reducer";


const Orders = () => {
    const [data, setdata]= useState([])
    const [{basket}]=useStateValue()
    const baseurl="https://difficult-crow-baseball-cap.cyclic.app"
    const fetchOrder=async()=>{
      const config ={
        headers:{
          'Content-Type' :'application/json',
          'Authorization': 'Bearer your_token_here'
        }
      }
      const {data} = await axios.get(`${baseurl}/order/get`);
      setdata(data)
      { Orders: getBasketTotal(basket) }
      console.log(data, "data")
    }
    useEffect(()=>{
      fetchOrder()
    },[])
  return (
    <div className='O-Container'>
        <Navbar/>
        <div className='Order-Main'>
            <div className='Order-Container'>
                <h2>Your Orders</h2>
               
                {     
                    data?.length && data?.map((item)=>(
                        <div className='Order-Detail'>
                        <div className='Address-Component'>
                         <h4>Shipping Address</h4>
                         <div className='Address-div'>
                             <p>{item.address.fullName}</p>
                             <p>{item.address.area}</p>
                             <p>{item.address.city}{item.address.state}</p>
                             <p>{item.address.phone}</p>
                             
                         </div>
                         <div className='Order-Basket'>
                             <h4>Order</h4>
                             <p>Subtotal :₹ {item.price} <span className='Order-Basket-spain'></span> </p>
                      
                        {
                          item.product?.length && item.product?.map((pro)=>(
                            // <img src={item.product.image} alt="" />
                            // console.log(pro,  "this is product")
                            <div className="order-Product">
                            <div className="order-Image">
                              <img src={pro?.image} alt="Product" />
                            </div>
                            <div className="order-Description">
                              <h4>{pro?.title}</h4>
                              <p>₹ {pro?.price}</p>
                             
                             
                            </div>
                          </div>
                          ))
                        }


                         </div>
                        </div>
                     </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )

}


export default Orders