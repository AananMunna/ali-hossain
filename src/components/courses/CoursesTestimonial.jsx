import React from 'react'

import { Link } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs';

const CoursesTestimonial = (props) => {
  return (
    
                <div className="coursesTestimonialsCard mb-5">
                    <div className="d-flex">
                        <img src={props.coursesTestimonialLogoImg} className='img-fluid coursesTestimonialLogoImg me-3 rounded-5' alt="" srcset="" />
                        <div>
                            <div className="coursesTestimonialName">{props.coursesTestimonialName}</div>
                        <div className="d-flex coursesTestimonialStar">
                            <BsStarFill/>
                            <BsStarFill/>
                            <BsStarFill/>
                            <BsStarFill/>
                            <BsStarFill/>
                        </div>
                        </div>
                    </div>
                <Link to=''>
                <div className="coursesTestimonialReviewHeading my-2">{props.coursesTestimonialReviewHeading}</div>
                </Link>
                    <div className="coursesTestimonialReviewText">{props.coursesTestimonialReviewText}</div>
                </div> 
  )
}

export default CoursesTestimonial