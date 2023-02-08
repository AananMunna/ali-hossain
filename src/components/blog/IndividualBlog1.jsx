import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg1 from '../../assets/blog/Why-So-Many-Programmers-Are-Quitting-min.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog1 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="individualBlogLeft">
            <Link>
            <h1 className="individualBlogHeading individualBlogHeadingLink">The Burnout Epidemic in the Programming Industry</h1>
            </Link>
            <div className="d-flex my-3">
        <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
        <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
        <div className="blogIcon blogIconI"><SlCalender/></div>
        <div className="blogSpan blogSpanI">January 20, 2023</div>
      </div>
      <img src={blogImg1} alt="blogImg1" className='img-fluid mb-3' />
      <p className="individualBlogP">People quit their programming education for a number of varied reasons. I know you do not want to be a part of these statistics. Why do most people quit coding? What do you need to know to avoid the mistakes others make?<br /><br />The many people who quit not only waste a good portion of their time and money but also their confidence and career outlook. Here are 5 reasons why people quit coding. Let’s find out!</p>
      <h1 className="individualBlogHeading">01. Lack of Time Management</h1>
      <p className="individualBlogP">Programming is not a thing, you will learn a certain amount of things and you are a programmer. It’s not. Definitely, you have a roadmap but here is something more. You need to practice and the more you do you will be better at coding. Lots of people do not focus on practicing and the main reason is they always complain about time. But if you can manage your time you will figure out most cases time is not an issue, time management is the problem. So organize your time based on your priority. Remember</p>
      <div className="individualBlogBorderAndP d-flex justify-content-start align-items-center">
        <div className="individualBlogBorder"></div>
        <p className="individualBlogP">Nobody is too busy, it is just a matter of priorities.</p>
        </div>
        <h1 className="individualBlogHeading">02. Lack of awareness</h1>
        <p className="individualBlogP">Sometimes you will fill like you do the same things every day. If you do this consistently you will feel bored. <b>Programmers working in a profession that deals with the future and change feel the need to dedicate themselves to something bigger. However, when all you have is repetitive everyday code for any administrative system, despair happens.</b>So, what do I do? I create YouTube videos, write content on Linkedin, Do coding challenges on leetcode and codewars, and many more. You can also contribute to open-source projects. It will give you extra joy to be consistent in coding and it will definitely sharpen your problem-solving skills. Remember </p>
        <div className="individualBlogBorderAndP d-flex justify-content-start align-items-center">
        <div className="individualBlogBorder"></div>
        <p className="individualBlogP"><b>Take the reins of your life, otherwise, you’ll spend your whole life regretting that you didn’t live the life you wanted</b></p>
        </div>
        <p className="individualBlogP">Do you like coding? If yes, why? Let me know in the comment and do not forget to like and subscribe if you don’t already.</p>
        <h1 className="individualBlogHeading"><b> 03. Jobs’ requirements seem too far away </b></h1>
        <p className="individualBlogP">If you open a job opening you will be surprised to see they need a web developer with PHP, Python, JavaScript, Ruby, Go, Object Oriented Programming, 10 years of working experience, git, Linux, and many more skills. But don’t worry. Just read the job title and think about what is important for the job role. If you find a job that would be ideal for you, but you don’t have all the knowledge, submit it anyway and explain that you are interested and that at the right time, you can become the perfect professional for the job. While doing the job you can step up your skills based on company needs.</p>
        <h1 className="individualBlogHeading"><b> 04 Don’t keep up with updates</b></h1>
        <p className="individualBlogP">Technology is evolving. 99% of updates will not significantly affect your development routine. Reading articles and watching tutorials on YouTube can help you receive news and stay up to date on your relevant job field. It’s not common for a running technology to disappear with a new one. It takes time. So if you learn and update yourself consistently then you are on track and your carrier is secured. Steve Jobs Said …..</p>
        <div className="individualBlogBorderAndP d-flex justify-content-start align-items-center">
        <div className="individualBlogBorder"></div>
        <p className="individualBlogP">“Let’s go invent tomorrow instead of worrying about what happened yesterday.” – Steve Jobs</p>
        </div>
        <h1 className="individualBlogHeading">05. Development is not for you!</h1>
        <p className="individualBlogP">Development is not for everyone. You may want to be a developer because you want to earn more and the opportunities you see but you might not like problem-solving or have no patience in fixing a bug for many hours sometimes a day. If you feel you have no patience in doing this then it’s not a job for you. You are in the wrong place. <b>Some also quit when they later discover they don’t enjoy programming enough to put in the requisite hard work and consequential sacrifices to succeed in it. Some people also stick with one language for their entire career and it can get tedious, a switch to another job is often a remedy for being bored.</b> <br />I hope this video is helpful to you. If it is do not forget to hit the like button What do you think about this video? let me know in the comment. See you soon till then you take care. Will ChatGPT replace your job? Click here see you there.</p>
                  </div>
            <IndividualBlogContact textLeft='Will chatgpt replace your job? 🤖'/>
        </div>


        <div className="col-sm-12 col-md-4 col-lg-4">
          <IndividualBlogRightComponent/>
        </div>
      </div>
    </div>
  )
}

export default IndividualBlog1