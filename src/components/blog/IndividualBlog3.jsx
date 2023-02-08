import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg3 from '../../assets/blog/Code.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';
const IndividualBlog3 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="individualBlogLeft">
          <Link>
          <h1 className="individualBlogHeading individualBlogHeadingLink">Make money with coding, what you have to be told 🤔</h1>
          </Link>
          <div className="d-flex my-3">
      <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
      <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
      <div className="blogIcon blogIconI"><SlCalender/></div>
      <div className="blogSpan blogSpanI">December 13, 2022</div>
    </div>
    <img src={blogImg3} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">It’s easy to learn code and if you consistently learn code and practice, it’s just a matter of time to become good at coding. Many people want to learn code to earn money by freelancing, doing jobs, creating content, teaching, selling code as passive income, and many streams.</p> 
    <p className="individualBlogP">But earning money as a coder is not as easy as learning code. In this article, I will tell you why it’s not easy to become successful as a beginner and how to increase your exposure to luck. So let’s begin.</p>
    <h1 className="individualBlogHeading">01. Earn Money as a Freelancer</h1>
       <p className="individualBlogP">If you look at a top freelancing marketplace like Upwork, Fiverr, Freelancer, PeoplePerHour, and other platforms you will find plenty of jobs as a developer. But if you want to get a job here, you need to maintain many things at a time. Like</p>
       <u>
        <li>Bid on the project</li>
        <li>Compete with experts</li>
        <li>Reply on time</li>
        <li>If clients want, you need to show decent projects</li>
        <li>Need to be good at English</li>
        <li>and many more.</li>
       </u>
       <p className="individualBlogP mt-3">As you can see, it’s not easy to be successful as a beginner. So if you want to become successful in freelancing, learn code and become good at it. Create some projects and upload them on GitHub, if possible buy a domain and hosting and upload your project there, it will help you to get a job faster. Learn English and improve your communication skills. I hope these tips will help you to become successful.</p>
       <h1 className="individualBlogHeading">02. Earn money by getting a job.</h1>
       <p className="individualBlogP">If you have good knowledge of coding and if you feel you have decent experience in it then you can earn money by getting a job. Previously it was easy to get a job but now lots of people are learning to code and that’s because when a company post a circular tons of applications submits. So it’s hard to stand out.</p> 
      <p className="individualBlogP">So, what you should do? Create an outstanding resume. In your resume, your profile picture should be professional, and write your about section, and carrier objective precisely. Your resume will help you get an interview call but your coding and communication skills will help you to get the job.</p> 
      <h1 className="individualBlogHeading">03. Earn money by creating content</h1>
      <p className="individualBlogP">You can create videos on YouTube and there are plenty of ways to make money, like Google Adsense, Sponsorship, and affiliation but here in order to earn money you need a decent audience. Otherwise no money.</p>
      <p className="individualBlogP">If you want to be successful here you need to be consistent. Upload a video every week, and try to help others, if you do it consistently after a while you will get views and subscribers then you will able to make money. I have tips for you. Do not see how many views you received or how many people subscribed to your channel just focus on quality content and create 100 videos. If you can do this I can assure you, you will be successful but if still after uploading your 100 videos no success then you can change your path.</p>
      <h1 className="individualBlogHeading">04. Selling course</h1>
      <p className="individualBlogP">You can earn money by teaching people how to code. There are plenty of platforms like udemy, skillshare where you can upload your course and earn money. Now if you want you can also earn money by selling courses through your website. It’s also a good way to earn money.</p>
      <h1 className="individualBlogHeading">05. Earn money by selling code</h1>
      <p className="individualBlogP">You can make money by selling code. If you are able to create awesome websites, you can sell them on theme forest or you can sell your code on codecanayon. If you have an awesome idea and you made them into a project it’s a good money-making machine.</p>
      <p className="individualBlogP">As a beginner, it’s not easy to convert ideas into projects so it’s hard.</p>
      <p className="individualBlogP">As you can see you can earn money in different ways, and you can earn huge. At this time learning how to code or the skill you have is extraordinary but making it is not easy. In order to become successful at it you need to be good at coding, you need to be passionate.</p>
      <p className="individualBlogP">Write code every day, Fix errors when they occur, learn new technology when it comes, and be good at it. If you can do it consistently then we expect you will earn a lot and be successful. Please tell me what you think about this artcle.</p>
                </div>
          <IndividualBlogContact textLeft='Common Bootstrap Mistakes To Avoid' textRight='Will chatgpt replace your job? 🤖'/>
      </div>


      <div className="col-sm-12 col-md-4 col-lg-4">
        <IndividualBlogRightComponent/>
      </div>
    </div>
  </div>
  )
}

export default IndividualBlog3