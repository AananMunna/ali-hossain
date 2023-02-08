import React from 'react'
import './popOver.css'

import coffeeCup from '../../assets/coffee cup.svg'

const PopOver = () => {
  return (
    <div>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id='popOverBtn'>
    <img src={coffeeCup} alt="coffeeCup" className='img-fluid' />
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasBottomLabel"> 
  <div class="offcanvas-body small">
    <h1>Buy Ali Hossain a <br /> coffee</h1>
    <div className='coffeeCard'>
        <div className='coffeeEmoji'>☕</div>
        <span className='x mx-1'>✖️</span>
        <div className='coffeeCardNum'>1</div>
        <div className='coffeeCardNum'>3</div>
        <div className='coffeeCardNum'>5</div>
        <input type="number" className='form-control coffeeCardInp'/>
    </div> 
    <input type="text" className='form-control my-3' placeholder='Name or @yourtwitter (optional)' name="" id="coffeeInp1" /> 
    <textarea type="text" className='form-control my-3 coffeeInpHeight' placeholder='Name or @yourtwitter (optional)' name="" id="coffeeInp1" /> 
    <button className="payBtn">Support $5</button>
  </div>
 <div className="coffeeFooter">
    <button className="btn coffeeFooterBtn"><img src={coffeeCup} alt="coffeeCup" className='img-fluid coffeeFooterImg' />buymeacoffee.com/aliHossain</button>
 </div>
</div>
    </div>
  )
}

export default PopOver