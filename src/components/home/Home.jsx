import React from 'react'
import { Link } from 'react-router-dom'

import './home.css'

import homeImg from '../../assets/ali_hossain.jpg' 
import About from '../about/About'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Testimonial from '../testimonial/Testimonial'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <>
    <div className="customContainer home-container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-10 order-sm-2 order-md-1 order-lg-1 order-2 home-left-side">
                <h3>HELLO, MY NAME IS</h3>
                <h1>Ali Hossain</h1>
                <h2>Web Developer (WordPress)</h2>
                <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, and  goal-oriented, and always work with an end goal in mind.</p>
                <Link to="/contact" className='homeHireMe'>Hire Me</Link>
                <Link to="/about" className='homeAboutMe'>About Me</Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10 order-sm-1 order-md-2 order-lg-2 order-1 home-right-side">
                <img src={homeImg} alt="home_img" srcset="" className='img-fluid home-img' />
            </div>
        </div>
    </div> 
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    </>
  )
}

export default Home