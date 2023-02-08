import React from 'react'
import { HiBookOpen } from 'react-icons/hi';
import { FiBook } from 'react-icons/fi';
import { BsBookmarksFill, BsCodeSquare } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { FaDesktop } from 'react-icons/fa'; 
import aboutMeImg from '../../assets/Ali-Hossain.png'

import './aboutMe.css'
import SkillBar from './SkillBar';
import Experience from './Experience';
import Contact from '../contact/Contact'

const AboutMe = () => {
  return (
    <div className="">

      <div className="aboutMe">
      <img src={aboutMeImg} alt="aboutMeImg" srcset="" className='aboutMeImg img-fluid' />
      <h1 className="aboutMeHeading">ALI HOSSAIN</h1>
      <h2 className="aboutMeSubHeading">Web Developer (WordPress)</h2>
      </div>

      <div className="myself container-fluid my-5 px-5">
        <h1>ABOUT ME</h1>
        <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic and goal-oriented, and I always work with an end goal in mind. Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with WordPress but some technologies I enjoy working with include ReactJS, JavaScript, and PHP.</p>
      </div>


      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className="aboutMeCard education">
              <h1 className='aboutMeCardHeading'>EDUCATION</h1>
              <div>
                <div className="educationIcon"><HiBookOpen/></div>
                <div className='educationP1'>2013-2014</div>
                <div className='educationP2'>M.Sc. In Information and Communication Technology</div>
              </div>
              <div>
                <div className="educationIcon"><FiBook/></div>
                <div className='educationP1'>2012-2013</div>
                <div className='educationP2'>M. Sc. In Physics</div>
              </div>
              <div>
                <div className="educationIcon"><BsBookmarksFill/></div>
                <div className='educationP1'>2008-2012</div>
                <div className='educationP2'>B. Sc. In Physics</div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
          <div className="aboutMeCard">
            <h1 className='aboutMeCardHeading mb-4'>SKILLS</h1>
            <SkillBar/>
          </div>
          </div>
        </div>
      </div>

      <div className="experience mt-3 Container px-4">
        <div className="experienceUnderDiv">
        <h1 className="experienceHeading">EXPERIENCE</h1>
        <h2 className='experienceSubHeading mb-5'>What I have done?</h2>
        </div>
          <Experience icon={<MdOutlineComputer/>} text1="2014 - Present" text2="www.fiverr.com" text3="I am ALI HOSSAIN, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2014. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result."/>
          <Experience icon={<FaDesktop/>} text1="2014 - Present" text2="www.upwork.com" text3="I am working on Upwork as WordPress Theme Designer and Developer. My design is simple & fresh. My coding is W3C validated, fresh, SEO optimized and also hand-coded. I work flexibly with clients to fulfill their design & development needs. Work with me and create a website that you are gonna be proud of. Use my work in your Business, Portfolio, Agency, Photography, eCommerce & much more."/>
          <Experience icon={<BsCodeSquare/>} text1="2014 - Present" text2="Web Development Farm" text3="I am working on a remote job in USA based company. Where y main job is to create a WordPress theme based on client needs. "/>
      </div>
        <Contact/>
    </div>
  )
}

export default AboutMe