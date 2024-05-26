import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(""); // Define the state for the current menu item

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
        <li>
          <ScrollLink className='anchor-link' to='home' smooth={true} offset={-50} duration={500}>
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </ScrollLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='about' smooth={true} offset={-50} duration={500}>
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </ScrollLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='services' smooth={true} offset={-50} duration={500}>
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </ScrollLink>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='projects' smooth={true} offset={-50} duration={500}>
            <p onClick={() => handleMenuClick("projects")}>Projects</p>
          </ScrollLink>
          {menu === "projects" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <ScrollLink className='anchor-link' to='contact' smooth={true} offset={-50} duration={500}>
            <p onClick={() => handleMenuClick("contact")}>Contact Me</p>
          </ScrollLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <ScrollLink className='anchor-link' to='contact' smooth={true} offset={-50} duration={500}>
          Connect with me
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
