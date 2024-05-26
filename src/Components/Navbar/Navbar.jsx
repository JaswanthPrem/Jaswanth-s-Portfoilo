import React, { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(""); // Define the state for the current menu item
  
  const menuRef = useRef();
 
 const openMenu = ()=>  {
    menuRef.current.style.right="0"
 }

 const closeMenu = ()=>  {
    menuRef.current.style.right="-350px"
 }


  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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
