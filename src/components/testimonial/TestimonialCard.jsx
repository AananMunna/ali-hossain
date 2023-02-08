import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 m-auto">
    <div className="testimonialCard">
        <p className='testimonialText'>{props.testimonialText}</p>
        <div className="d-flex mt-2 text-center justify-content-center align-items-center">
            <img src={props.testimonialImg} alt="testimonialImg" srcset="" className='img-fluid testimonialImg' />
            <div>
            <h2 className='testimonialLast m-0 p-0 '>{props.testimonialLast1}</h2>
            <h2 className='testimonialLast m-0 p-0 '>{props.testimonialLast2}</h2>
            </div>
        </div>
    </div>
</div>
  )
}

export default TestimonialCard