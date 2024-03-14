import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Slider-Crousal.css"

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container ">
      <Slider className="Slider-crousal" {...settings}>
        <div >
        <div className="slider-img-div"><img className="slider-img" src="https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg" alt="" /></div>
        
        <p className="p-tag">iQOO Neo 7 Pro| 8 GB RAM</p>
        </div>
        <div>
        <div className="slider-img-div">
        <img className="slider-img" src="https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg" alt="" />
        </div>
        
        <p className="p-tag">POCO M6 Pro 5G | Starting from 9999</p>
        </div>
        <div>
       <div className="slider-img-div"> <img className="slider-img" src="https://m.media-amazon.com/images/I/41GyT-FAGNL._AC_SY200_.jpg" alt="" /></div>
        <p className="p-tag">Techno Pop 8 | 4GB RAM 5G</p>
        
        </div>
        <div>
            <div className="slider-img-div"> <img className="slider-img" src="https://m.media-amazon.com/images/I/713D1eLsaqL._AC_SY200_.jpg" alt="" /></div>
         
          <p className="p-tag">California Almonds || 500 Gram</p>
        </div>
        <div>
            <div slider-img-div><img className="slider-img" src="https://m.media-amazon.com/images/I/41DWaBMm-iL._AC_UF226,226_FMjpg_.jpg" alt="" /></div> 
          <p className="p-tag">Exciting Holi Offers on Realme buds</p>
        </div>
        {/* <div>
        <div slider-img-div><img className="slider-img" src="https://m.media-amazon.com/images/I/41ArHnIL7uL._AC_SY200_.jpg" alt="" /></div>
        
          <p className="p-tag">Poco C55 Abhishe kryetu</p>
        </div> */}
        {/* <div>
        <div slider-img-div><img className="slider-img" src="https://m.media-amazon.com/images/I/41OCzBgh2HL._AC_UF226,226_FMjpg_.jpg" alt="" /></div>
        
          <p className="p-tag">Beauty Products- Renee,Aroma Magic</p>
        </div> */}
      </Slider>
    </div>
  );
}

export default Responsive;
