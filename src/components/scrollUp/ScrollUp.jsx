import React, { useState, useEffect } from 'react';

import './scrollUp.css'

const ScrollUp = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShow(true);
        } 
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
  
    useEffect(() => {
      const handleHomeScroll = () => {
        if (window.scrollY === 0) {
          setShow(false);
        }
      };
  
      window.addEventListener('scroll', handleHomeScroll);
      return () => window.removeEventListener('scroll', handleHomeScroll);
    });
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <div style={{ display: show ? 'block' : 'none' }}> 
    <div className='scrollUp' onClick={handleClick}></div>
    </div>
  )
}

export default ScrollUp