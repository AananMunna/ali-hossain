import React from 'react'
import './courses.css'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';


import coursesCardImg1 from '../../assets/Bootstrap.jpg'
import coursesCardImg2 from '../../assets/Udemy-web-design.jpg'
import coursesCardImg3 from '../../assets/udemy.jpg'
import Course from './Course'

import coursesTestimonialLogoImg1 from '../../assets/Untitled-1.png'
import coursesTestimonialLogoImg2 from '../../assets/Untitled-1.jpg'
import coursesTestimonialLogoImg3 from '../../assets/Untitled-2.png'
import coursesTestimonialLogoImg4 from '../../assets/1.png'
import coursesTestimonialLogoImg5 from '../../assets/3.png'
import coursesTestimonialLogoImg6 from '../../assets/3 (1).png'

import CoursesTestimonial from './CoursesTestimonial'

const Courses = () => {
  return (
    <div className="m-5">
        <h1 className="coursesHeading text-center">Courses</h1>
        <h2 className="coursesSubHeading text-center mb-5">Practical project-based courses</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
          <Fade left> 
            <Course coursesCardImg={coursesCardImg1} coursesTitle="Bootstrap 5 Essential Training : With Projects" link="https://www.udemy.com/course/bootstrap-essential-training-with-projects/"/>
            </Fade>
          </div> 
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Fade bottom>
            <Course coursesCardImg={coursesCardImg2} coursesTitle="Build Responsive Websites with Modern HTML & CSS with Sass" link="https://www.udemy.com/course/responsive-websites-modern-html-css-with-sass/"/>
            </Fade>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Fade right>
            <Course coursesCardImg={coursesCardImg3} coursesTitle="Videoscribe Whiteboard Animations : With Project" link="https://www.udemy.com/course/videoscribe-whiteboard-animations/"/>
            </Fade>
            </div>
        </div>

        <div className="CoursesTestimonial mt-5 pt-5">
          <Zoom>
        <h1 className="coursesHeading text-center">Testimonials</h1>
        <h2 className="coursesSubHeading text-center mb-5">What other students say</h2>
        </Zoom>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <Rotate top left>
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg1} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </Rotate>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Rotate top left> 
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg2} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </Rotate>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Rotate top left> 
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg3} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </Rotate>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg4} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg5} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <CoursesTestimonial coursesTestimonialLogoImg={coursesTestimonialLogoImg6} coursesTestimonialName="Aminul Islam B." coursesTestimonialReviewHeading='Course: Learn Bootstrap 5 with projects' coursesTestimonialReviewText="This course is awesome! At the end of this course anyone will be able to use Bootstrap efficiently. So, If you want to learn bootstrap 5 simply you can take this course. I hope you can learn a lot."/>
            </div>
        </div>
        </div>

<div className='d-flex justify-content-center align-item-center'>
<Pulse> <a href="https://www.udemy.com/user/ali-hossain-26/" target='_blank'>  <button className="coursesTestimonialButton ">INSTRUCTOR PROFILE</button></a> </Pulse>
</div>

    </div>
  )
}

export default Courses