import React from 'react'

const Experience = (props) => {
  return (
    <div className="experienceCard">
    <div className="row">
      <div className="col-sm-12 col-md-1 col-lg-1">
        <div className="experienceCardIcon">{props.icon}</div>
      </div>
      <div className="col-sm-12 col-md-11 col-lg-11">
        <div className="experienceCardText1">{props.text1}</div>
        <div className="experienceCardText2">{props.text2}</div>
        <div className="experienceCardText3">{props.text3}</div>
      </div>
    </div>
   </div>
  )
}

export default Experience