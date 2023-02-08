import React, { useState } from 'react';

import ReactPlayer from 'react-player'

import './about.css'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => { 
  const [counterOn, setCounterOn]=useState(false)
  return (
    <div className="customContainer about-page">
        <div className="row">
         <div className="about-left-side col-lg-6 col-md-10 col-sm-10 img-fluid">
         <ReactPlayer
          url='https://youtu.be/XJght3w2d8A'
          className='react-player img-fluid' 
          width='100%'
          height='100%'
        />
         </div>
         <div className="about-right-side col-lg-6 col-md-10 col-sm-10 ">
            <h1>About Me</h1>
            <h2>Why You Hire Me?</h2>
            <p>Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintain excellent communication. Most of the time I work with WordPress but some technologies I enjoy working with include ReactJS, JavaScript as well as PHP.</p>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="countBox row">
                <div className="box col-sm-12 col-md-3 col-lg-3">
                    <h1>{counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}<span>%</span></h1>
                    <h2>SUCCESS RATE</h2>
                </div>
                <div className="box col-sm-12 col-md-3 col-lg-3">
                    <h1>{counterOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}<span>+</span></h1>
                    <h2>HOURS OF WORK</h2>
                </div>
                <div className="box col-sm-12 col-md-3 col-lg-3">
                    <h1>{counterOn && <CountUp start={0} end={350} duration={2} delay={0}/>}<span>+</span></h1>
                    <h2>HAPPY CLIENTS</h2>
                </div>
            </div>
            </ScrollTrigger>
         </div>
        </div>
    </div>
  )
}

export default About