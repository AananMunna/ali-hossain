import React from 'react'

import { Link } from "react-router-dom"

const Blog = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="blogCard mb-5">
      <Link to={props.url}>
      <img src={props.blogImg} alt="blogImg1" className='img-fluid blogImg' />
      </Link>
      <div className="blogUnderTheImg">
      <Link to={props.url}>
      <div className="blogHeading">{props.blogHeading}</div>
      </Link>
      <div className="d-flex">
        <div className="blogIcon">{props.blogIcon1}</div>
        <div className="blogSpan">{props.blogSpan1}</div>
        <div className="blogIcon">{props.blogIcon2}</div>
        <div className="blogSpan">{props.blogSpan2}</div>
      </div>
      <div className="blogText">{props.blogText}</div>
      </div>
    </div>
  </div>
  )
}

export default Blog