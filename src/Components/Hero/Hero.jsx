import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import {Link as ScrollLink} from 'react-scroll'

const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Jaswanth Prem,</span> Softwere engineer based in India.</h1>
      <p>I'm a dedicated software engineer currently pursuing my studies at IIT BHU Varanasi. With a strong foundation in various programming languages and tools, I excel in developing innovative solutions and leveraging data to drive impactful results.</p>
      <div className="hero-action">
      <div className="hero-connect">
      <ScrollLink 
        className='anchor-link' 
        to='contact' 
        smooth={true} 
        offset={-50} 
        duration={500}
      >
        Connect with me
      </ScrollLink>
    </div>
        <div className="hero-resume"> <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a> </div>
      </div>
    </div>
  )
}

export default hero
