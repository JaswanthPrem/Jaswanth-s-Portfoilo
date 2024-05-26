import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="top-left">
            <img src={logo} alt="" />
            <p>I'm a softwere developer from, India with 2 years of experiance.</p>
        </div>
        <div className="top-right">
         <div className="email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter yout email' />
         </div>
         <div className="follow">
            Follow
         </div>
        </div>
      </div>
      <hr />
      <div className="footer-bootom">
        <p className="footer-bottom-left">© 2024 Jaswanth Sai Prem Kuthadi. All rights reserved.</p>
        <div className="bootom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p></div>
      </div>
    </div>
  )
}

export default Footer
