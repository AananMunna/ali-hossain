import React from 'react'
 

import './services.css'

const ServicesCard = (props) => {
  return (
        <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
 
            <div className='servicesCard'>
            <div className="servicesCardIcon mb-2">{props.icon}</div>
            <div className="servicesCardHeading mb-1">{props.heading}</div>
            <div className="servicesCardPara">{props.text}</div>
            </div>
        </div>
 
  )
}

export default ServicesCard