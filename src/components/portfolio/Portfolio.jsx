import React from 'react'

import './portfolio.css'

import portfolioImg1 from '../../assets/Tienda-de-Productos.jpg'
import portfolioImg2 from '../../assets/cleanearthsci_thumb.jpg'
import portfolioImg3 from '../../assets/Qtex-Serve-BD.jpg'

import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <div className='customContainer'>
        <h1 className="portfolioHeading text-center ">Portfolio</h1>
        <h2 className="portfolioSubHeading text-center mb-5">Latest Projects</h2>
        <div className="row">

            <PortfolioCard portfolioImg1={portfolioImg1} portfolioThirdHeading="WORDPRESS" portfolioFourthHeading="WordPress Theme Development"/>

            <PortfolioCard portfolioImg1={portfolioImg2} portfolioThirdHeading="WORDPRESS" portfolioFourthHeading="PSD to WordPress development"/>

            <PortfolioCard portfolioImg1={portfolioImg3} portfolioThirdHeading="WORDPRESS" portfolioFourthHeading="XD to WordPress Development"/>

        </div>
    </div>
  )
}

export default Portfolio