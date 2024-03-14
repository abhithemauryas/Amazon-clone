import React from 'react'
import "../CSS/Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='Main-footer-contener'>
                <div className='footer-contener'>
                    <div className="box">
                        <h3>Get to know Us</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Science</p>
                    </div>

                    <div className='box'>
                        <h3>Connecr with Us</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div className='box'>
                        <h3>Make Money with Us</h3>
                        <p>Sell on Amazon</p>
                        <p>Sell under amazon Accelerator</p>
                        <p>Protect and Build Your Brand</p>
                        <p>Amazon Global Selling</p>
                        <p>Amazon  Business Card Program</p>

                    </div>
                    <div className='box'>
                        <h3>Let Us Help You</h3>
                        <p>COVID-19 and Amazon</p>
                        <p>Your Account</p>
                        <p>Return Center</p>
                        <p> 100 % Purchase Protection</p>
                        <p>Help</p>
                    </div>
                </div>

           

            {/* // ----------END--About--Section------------- */}
            <div className='line'></div>
            <div className='copyright'>
          <div className='logo-container'>
            <div  className='imgBx'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtXTnib-U1GRWPnKCLWrJuWMTjBXoHpJOFD-FYMpH_w&s" alt="logo" />
            </div>
            <div className='language-select'>
              
                <select>
                    <option selected value="eng">English</option>
                    <option value="">Hindi</option>
                    <option  value="fr">Français</option>
                    <option value="es">Españ</option>
                    
                </select>
            </div>
            </div>
            </div>
            <div className='Main-social-icons'>
            <div className='social-icons'>
           <p>Australia </p>
           <p>Brazil  </p>
        <p>Canada</p>
        <p>China</p>
        <p>France</p>
        <p>Germany </p>
        <p>Italy</p>
        <p>Japan</p>
        <p>Mexico</p>
        <p>Netherlands </p>
        <p>Poland </p>
        <p>Singapore </p>
        <p>Spain</p>
        <p>Turkey</p>
        <p>United Arab Emirates</p>
         <p>United Kingdom</p>  
       </div> 
       <div className='main-term-Conditions'>
        <p className='term-Conditions'>Conditions of Use & Sale
         Privacy Notice
         Interest-Based Ads
        <br />&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  © 1996-2024, Amazon.com, Inc. or its affiliates</p>
       </div>
            </div>
        
            </div>
        </div>
    )
}

export default Footer