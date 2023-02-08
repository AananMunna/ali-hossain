import React from 'react'

import { FaSkype } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import contactImg from '../../assets/contact1.png'

import './contact.css'

const Contact = () => {
  return (
    <div className="customContainer mt-5">
        <h1 className="contactHeading text-center">Contact</h1>
        <h2 className="contactSubHeading text-center mb-5">Connect with me</h2>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                <div className="ContactLeftSide">
                    <img src={contactImg} alt="contactImg" srcset="" className='img-fluid contactLeftImg' />
                    <h1 className='contactLeft1 mt-3'>Ali Hossain</h1>
                    <h2 className='contactLeft2'>Web Developer (WordPress)</h2>
                    <p className='contactLeft3'>Are You Looking For Your Business Online <br /> Presence? I am here.</p>
                    <div className="d-flex">
                        <div className="contactIcon me-3"><FaSkype/></div>
                        <span className='contactLeftUI'>shovo654</span>
                    </div>
                    <div className="d-flex">
                        <div className="contactIcon me-3"><GrMail/></div>
                        <div className='contactLeftUI'>shovoalways@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 mb-5">
                <div className="ContactRightSide">

                <div>
  <div class="form-group">
    <label for="name" className='contactCommon'>Your name</label>
    <input type="text" class="form-control contactInp" id="name" /> 
  </div>
  <div class="form-group">
    <label for="email" className='contactCommon'>Your email</label>
    <input type="email" class="form-control contactInp" id="email" aria-describedby="emailHelp" /> 
  </div>
  <div class="form-group">
    <label for="subject" className='contactCommon'>Subject</label>
    <input type="text" class="form-control contactInp" id="subject" />
  </div> 
  <div class="form-group">
    <label for="message" className='contactCommon'>Your message (optional)</label>
    <textarea type="text" rows="10" cols="40" aria-invalid="false" class="form-control contactTextarea" id="message" />
  </div> 
  <button type="btn " class="btn contactSubBtn">Submit</button>
</div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact