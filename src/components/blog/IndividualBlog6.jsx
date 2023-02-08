import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg6 from '../../assets/blog/Best-Way-to-learn-code.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog6 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="individualBlogLeft">
          <Link>
          <h1 className="individualBlogHeading individualBlogHeadingLink">Best Way to learn code</h1>
          </Link>
          <div className="d-flex my-3">
      <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
      <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
      <div className="blogIcon blogIconI"><SlCalender/></div>
      <div className="blogSpan blogSpanI">June 7, 2022</div>
    </div>
    <img src={blogImg6} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">No matter what you want to be, it may be a web developer, software developer, or game developer, you have to learn code. If you follow some tricks, learning code is fun. In this post, I am going to explain how you can learn code effectively. So, if you are interested keep reading.</p>  
    <h1 className="individualBlogHeading">01. Active vs Passive Learning</h1>
       <p className="individualBlogP">The first thing is, that you should learn code actively not passively. Learning code and watching movies or music videos are not the same. So. if you are interested to learn code in that case definitely you should learn it actively not passively. When you watch a movie or listen to music in that case you don’t need to do everything actively. You can watch that passively but when you want to learn code in that case while an instructor actually coding, you should also try to code. While an instructor tries to explain something you should try to understand what actually he wants to explain, as well as you should try to implement those tips and tricks and problem-solving things on your project. Lots of students actually watch when an instructor shares their experience but they procrastinate and they don’t do any practice. If you do the same thing, you cannot learn code effectively. So try to learn code actively not passively.</p> 
       <h1 className="individualBlogHeading">02. Take breaks</h1>
       <p className="individualBlogP">Suppose you want to learn code and it may be a Bootstrap course. In that case, you purchased a course from Udemy. Suppose you want to learn that knowledge and this course is about 10 hours and you decided that, you will learn a total thing in a day, it will be a horrible experience for you and also I can assure if you can able to complete the total 10-hour course in one or two days it will not be very sustainable. The reason because learning code is fun but if you overdo it, it will make too much confusion. So, I recommend you take a break. Suppose you want to learn something, in that case, you should learn and take a break, like after 1-hour learning takes 10 to 15 minutes break. If you learn this way, you will be able to learn and understand code properly. This is an effective way to learn code.</p> 
      <h1 className="individualBlogHeading">03. Take notes while learning</h1>
      <p className="individualBlogP">You should take notes while learning. You can take notes on paper or on digital notes, like the notion, google keep, Evernote, notes, and so on. No matter where actually you’re writing, I recommend you to take notes. The reason because when an instructor explains something, it will be great if you take notes while learning. Otherwise, every time when you will stuck on something you need to go through a total tutorial, your notes can save your productive time.</p> 
      <h1 className="individualBlogHeading">04. Keep Tracking</h1>
      <p className="individualBlogP">Suppose you want to learn JavaScript and you started learning. After a while, you don’t know how far you have come. In that case, tracking can be helpful for you. If you do not track your learning, in that case you will be in a loop. All-time you will feel you need to learn more. Just by completing a course or a book, you will not learn complete things, you need to explore lots of new things. But it’s perfect to start creating some basic projects. While creating every new project you will face some new problem, what you do not know, or forget the topic you learned. Then just revise the topic or learn the topic and carry on. So, if you want to learn code effectively you should track your learning.</p>
      <h1 className="individualBlogHeading">05. Rest and Recover</h1>
      <p className="individualBlogP">Do not forget to take a rest. Otherwise, your learning will not effective. So, learn, take a rest, revise and recover this should be your strategy to learn code. If you take rest as well as if you recover what you learned I hope your coding experience will be fine and you can learn code effectively.</p>
      <h1 className='individualBlogHeading'>Bonus</h1>
      <p className="individualBlogP">Create projects as much as you can. Creating a project will give you a core understanding of the code. Upload your code on GitHub and share your interviewer. It will help you to get a job quickly.</p>
      <p className="individualBlogP">I hope this post is helpful for you. Thank you.</p> 
                </div>
          <IndividualBlogContact textLeft='Best practice for writing code comments' textRight='JavaScript Books for Beginners to Advanced Developers'/>
      </div>


      <div className="col-sm-12 col-md-4 col-lg-4">
        <IndividualBlogRightComponent/>
      </div>
    </div>
  </div>
  )
}

export default IndividualBlog6