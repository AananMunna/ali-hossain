import React from 'react'

import './services.css'

import { FaHtml5, FaLaptopCode, FaWordpress } from 'react-icons/fa';

import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='customContainer mb-5'>
    <h1 className="servicesHeading text-center">Services</h1>
    <h2 className="servicesSubHeading text-center mb-5">What I will do for you?</h2>
    <div className="row">
    <ServicesCard icon={<FaHtml5/>} heading="PSD TO HTML5"  text="I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website."/>

    <ServicesCard icon={<FaLaptopCode/>} heading="FRONT-END DEVELOPER"  text="I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction."/>

    <ServicesCard icon={<FaWordpress/>} heading="WORDPRESS DEVELOPER"  text="I love to develop WordPress websites. I developed more than 300 WordPress websites. It’s fun to create a WordPress website and you will be able to control the complete website from the admin panel."/>
    </div>
    </div>
  )
}

export default Services