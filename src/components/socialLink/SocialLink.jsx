import React from 'react'

import Fade from 'react-reveal/Fade';

import './socialLink.css'
import facebook from '../../assets/icons8-facebook.svg'
import twitter from '../../assets/icons8-twitter-squared-48.png'
import pinterest from '../../assets/icons8-stylish-p-logo-for-pinterest-app-for-cross-platform-devices-24.png'
import linkedin from '../../assets/icons8-linkedin-48.png'
import reddit from '../../assets/icons8-social-news-aggregation,-web-content-rating,-and-discussion-website.-24.png'
import whatsApp from '../../assets/icons8-whatsapp-100.png'
import mail from '../../assets/icons8-post-48.png'
import plus from '../../assets/icons8-add-new-48.png'
const SocialLink = () => {
  return (
    <div className='socialLink'>
        <Fade top>
        <div><a href="#"><img src={facebook} alt="" className='img-fluid' /></a></div> 
        <div><a href="#"><img src={twitter} alt="" className='img-fluid' /></a></div>
        <div><a href="#"><img src={pinterest} alt="" className='img-fluid ms-1 sLink' /></a></div>
        <div><a href="#"><img src={linkedin} alt="" className='img-fluid' /></a></div>
        <div><a href="#"><img src={reddit} alt="" className='img-fluid ms-1 sLink' /></a></div>
        <div><a href="#"><img src={whatsApp} alt="" className='img-fluid' /></a></div>
        <div><a href="#"><img src={mail} alt="" className='img-fluid' /></a></div>
        <div><a href="#"><img src={plus} alt="" className='img-fluid' /></a></div>
        </Fade>
    </div>
  )
}

export default SocialLink