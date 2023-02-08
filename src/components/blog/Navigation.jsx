import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <div className="container">
    <div className="navigationPart">
       <div className='notPointer'>{props.first}</div> 
      <Link to={props.firstLink}><button className={props.className1}>{props.second}</button></Link>
      <Link to={props.secondLink}><button className={props.className2}>{props.third}</button></Link>
      <Link to={props.thirdLink}><button className={props.className3}>{props.fourth}</button></Link>
    </div>
  </div>
  )
}

export default Navigation