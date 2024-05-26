import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  // State to track which services are expanded
  const [expandedServices, setExpandedServices] = useState({});

  // Function to toggle the expanded state
  const toggleReadMore = (index) => {
    setExpandedServices((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>
              {expandedServices[index] ? service.s_desc : `${service.s_desc.substring(0, 60)}...`}
            </p>
            <div className='services-readmore' onClick={() => toggleReadMore(index)}>
              <p>{expandedServices[index] ? 'Read Less' : 'Read More'}</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
