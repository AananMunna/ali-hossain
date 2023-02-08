import React from 'react'

import './testimonial.css'

import testimonialImg1 from "../../assets/ryangladhill.jpg"
import testimonialImg2 from "../../assets/rossbrown.jpg"
import testimonialImg3 from "../../assets/Clients.jpg"

import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div className="customContainer mt-5">
        <h1 className="testimonialHeading text-center">Testimonial</h1>
        <h2 className="testimonialSubHeading text-center mb-5">What Clients Say</h2>
        <div className="row">

            <TestimonialCard testimonialImg={testimonialImg3} testimonialText="Very experienced and super fast. Weren’t able to get one thing done but not his fault. I will definitely use him again. Very nice guy!" testimonialLast1="mbdevboston" testimonialLast2="Designer" />

            <TestimonialCard testimonialImg={testimonialImg2} testimonialText="Great experience, highly recommend. Worked through all my questions with me and was very timely in his responsiveness. Very nice guy!" testimonialLast1="rossbrown" testimonialLast2="Manager" />

            <TestimonialCard testimonialImg={testimonialImg1} testimonialText="Very experienced and super fast. Weren’t able to get one thing done but not his fault. I will definitely use him again. Very nice guy!" testimonialLast1="ryangladhill" testimonialLast2="Manager" />
            
        </div>
    </div>
  )
}

export default Testimonial