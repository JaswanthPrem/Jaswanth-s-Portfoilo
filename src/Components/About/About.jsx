import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-titel">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I' m an experianced Developer with over a dedicated of profissional experties in the feild.</p>
                <p>My passion for coading is not only reflected in my experiance but also in the enthusiasm and dedication i bring to each project and problem.</p>
            </div>
           <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>Java Script</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Reactjs</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>C++ & DSA</p><hr style={{width:"85%"}} /></div>
            <div className="about-skill"><p>Data Science</p><hr style={{width:"65%"}} /></div>
            <div className="about-skill"><p>Data Analysis</p><hr style={{width:"90%"}} /></div>
           </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="abput-achivment"><h1>2+</h1> <p>YEARS OF EXPERIANCE</p></div>
        <hr />
        <div className="abput-achivment"><h1> 5 STAR</h1> <p>SQL Badge Holeder From Hacker Rank</p></div>
        <hr />
        <div className="abput-achivment"><h1>500+</h1> <p>DSA Problems Solved</p></div>
        <hr />
        <div className="abput-achivment"><h1>Computer Science</h1> <p>CHEEG Expert</p></div>
      </div>
    </div>
  )
}

export default About
