import React from 'react'
import './about.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';


const delay = 5000;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  className: 'notes-slider',
  autoplay: true,
  autoplaySpeed: 7000,
};

function About() {
  
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === 3 - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);


  return (
    <div className="text">
      We are UBC Onyx, a UBC Collegiate LOL team competing in NECC Champions Pacific.

    
    
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <img
        class="slides"
          src="https://wallpaperaccess.com/full/217097.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        class="slides"
           src="https://images.alphacoders.com/656/656584.jpg" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        class="slides"
           src="https://www.guidingtech.com/wp-content/uploads/Best-League-of-Legends-Wallpapers-3_4d470f76dc99e18ad75087b1b8410ea9.jpg" 
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );



  // return (
    
    
  //  <div className="banner"><div className="text">We are UBC Onyx, competing in NECC Champions Pacific</div></div>
  // )
}

export default About