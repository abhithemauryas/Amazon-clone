import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../CSS/Home.css'
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";
import Responsive from "./Slider";



const Home = () => {
  const [data, setdata]= useState([])

  const baseurl="https://difficult-crow-baseball-cap.cyclic.app"
  const fetchdata=async()=>{
    const config ={
      headers:{
        'Content-Type' :'application/json',
        'Authorization': 'Bearer your_token_here'
      }
    }
    const {data} = await axios.get(`${baseurl}/product`);
    setdata(data.data)
    console.log(data, "data")
  }
useEffect(()=>{
fetchdata()
},[])


// {
//   "_id": "65e77a6b86d8d01f743ed47b",
//   "title": "This is Rat",
//   "imageURl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9zVXSFtV0xTbTMQTaGyZYfO6fjDSKEzfpA&usqp=CAU",
//   "price": 250,
//   "rating": 4,
//   "__v": 0
// },
  // const cardData=[
  //   {
  //      id: 1,
  //     img:'https://m.media-amazon.com/images/I/4141XHdxv1L._AC_SR400,600_.jpg',
  //     desc:"itel A70 |12GB* RAM + 128GB ROM|",
  //     rating:'4', 
  //     price:'6799'
  //   },
  //   {
  //     id: 2,
  //     img:'https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SR400,600_.jpg',
  //     desc:"25W USB Travel international All in one",
  //     rating:'5',
  //     price:'587'
  //   },
  //   {
  //     id: 3,
  //     img:'https://m.media-amazon.com/images/I/31qxam09KnL._AC_SR400,600_.jpg',
  //     desc:"usb c hard drive cable USB C Type C to Micro-B USB 3.0 Cable",
  //     rating:'4',
  //     price:'384'
  //   },
  //   {
  //     id: 4,
  //     img:'https://m.media-amazon.com/images/I/41rrSqKAk6L._AC_SR400,600_.jpg',
  //     desc:"Laser Pointer, Wireless Presenter for Presentation, Slide Changer",
  //     rating:'3',
  //     price:'598' 
  //   },
  //   {
  //     id: 5,
  //     img:'https://m.media-amazon.com/images/I/41rrSqKAk6L._AC_SR400,600_.jpg',
  //     desc:"Laser Pointer, Wireless Presenter for Presentation, Slide Changer",
  //     rating:'3',
  //     price:'598' 
  //   },
  //   {
  //     id: 6,
  //     img:'https://m.media-amazon.com/images/I/41rrSqKAk6L._AC_SR400,600_.jpg',
  //     desc:"Laser Pointer, Wireless Presenter for Presentation, Slide Changer",
  //     rating:'3',
  //     price:'598' 
  //   },
  //   {
  //     id: 7,
  //     img:'https://m.media-amazon.com/images/I/41rrSqKAk6L._AC_SR400,600_.jpg',
  //     desc:"Laser Pointer, Wireless Presenter for Presentation, Slide Changer",
  //     rating:'3',
  //     price:'598' 
  //   },
  //   {
  //     id: 8,
  //     img:'https://m.media-amazon.com/images/I/41rrSqKAk6L._AC_SR400,600_.jpg',
  //     desc:"Laser Pointer, Wireless Presenter for Presentation, Slide Changer",
  //     rating:'3',
  //     price:'598' 
  //   }
  // ]
  
  
  return (
    <div className="m-comtainer">
    <Navbar />
     <div className="Banner">
      <img src="./banner.jpg" alt="" />
     </div>
     <div className="Parent_main">
     <div className="Main">
     {
      data && data.map((item)=>(
        <Card item={item} key={item._id}  />
      ))
     }
     </div>
     </div>
     <div className="Responsive-Crousal">
      <Responsive />
     </div>
   <div>
   <Footer/>
   </div>
    </div>
  );
};

export default Home;
