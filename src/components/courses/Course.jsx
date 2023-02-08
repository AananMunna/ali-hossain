import React from 'react'
import Fade from 'react-reveal/Fade';


const Course = (props) => {
  return (
    
      <div className="coursesCard mb-4">
        <a href={props.link} target="_blank">
            <img src={props.coursesCardImg} alt="coursesCardImg" className='img-fluid coursesCardImg'/>
        </a>
        <div className="divB mt-3">BEGINNER</div>
            <a href='https://www.udemy.com/course/bootstrap-essential-training-with-projects/' target="_blank">
                <h2 className="coursesTitle">{props.coursesTitle}</h2>
            </a>
      </div> 
    
  )
}

export default Course