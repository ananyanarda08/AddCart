import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt=""/>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id omnis repudiandae at nulla asperiores repellendus, iste, eveniet blanditiis nam ipsum iusto voluptatem totam delectus qui quibusdam aut sunt nesciunt.</p>
           <div className="footer-social-fans">
           <img src={assets.facebook_icon} alt=""/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
           </div>
        </div>

        <div className="footer-content-center">
            <h1>COMPANY</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h1>GET IN TOUCH</h1>
            <ul>
                <li>+1 222 333 4444</li>
                <li>anna@gmail.com</li>
              
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        copyright 2024 @ Tomato.com-All right reserved.
      </p>
      
    </div>
  )
}

export default Footer
