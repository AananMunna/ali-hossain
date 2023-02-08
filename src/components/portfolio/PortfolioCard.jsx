import React from 'react'

const PortfolioCard = (props) => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 m-auto'>
    <div className="portfolioCard">
        <img src={props.portfolioImg1} alt="portfolioImg1" className='img-fluid portfolioImg mb-2'/>
        <h3 className='portfolioThirdHeading'>{props.portfolioThirdHeading}</h3>
        <h2 className='portfolioFourthHeading'>{props.portfolioFourthHeading}</h2>
    </div>
</div> 
  )
}

export default PortfolioCard