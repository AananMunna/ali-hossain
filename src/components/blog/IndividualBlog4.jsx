import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg4 from '../../assets/blog/Common-Bootstrap-Mistakes-To-Avoid.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog4 = () => {
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
    <img src={blogImg4} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">Bootstrap is one of the best CSS frameworks. But, do you know that many developers make mistakes when they use bootstrap? That’s why lots of companies and organizations use bootstrap on their websites. Learning Bootstrap is not difficult. Bootstrap looks very simple and easy to use, but many developers are rushing into the framework and so mistakes happen.</p> 
    <p className="individualBlogP">In this post, we will take a look at <b>5 of the most common bootstrap mistakes</b>when developers start using it. So let’s begin.</p>
    <h1 className="individualBlogHeading">01. No need to learn CSS</h1>
       <p className="individualBlogP">If you think, If I learn bootstrap I do not need to learn CSS, you are wrong. Every front-end developer needs to know HTML5 as well as CSS3. Defiantly if you use bootstrap you do not need to handle media queries but you need to understand how responsive design works.</p> 
       <p className="individualBlogP mt-3">If you only use bootstrap and create some projects, you will figure out that all projects look mostly the same. But if you use custom CSS on top of bootstrap it will look different and your project will have unique look. Take a look, get some inspiration, and start building your own design variation.</p>
       <h1 className="individualBlogHeading">02. Changing the Bootstrap CSS file</h1>
       <p className="individualBlogP">Do not modify the bootstrap.css file. right after you changed something on this file your project will get complicated and if you update bootstrap your whole design will break.</p> 
      <p className="individualBlogP">The best practice is if you want to change any bootstrap CSS, do this on your style.css and place your CSS file after the bootstrap CSS file. So your CSS file will work perfectly.</p> 
      <h1 className="individualBlogHeading">03. Use necessary features only</h1>
      <p className="individualBlogP">Carousel, accordion, modals, tooltip lots of feature bootstrap offers. You are creating a website, and it does not mean using all features. Just use the feature you need. you should make use of the right tools that are easy for you and web pages. It will help you to minimize errors.</p>
       <h1 className="individualBlogHeading">04. Misusing a modal prompt</h1>
      <p className="individualBlogP">Boostrap modal can help you to create a dialog prompt in shot time and functionality. It’s easy to create. But you can not use multiple models on a single page. Still, it’s not working properly on IOS. So when you want to use modal, make sure you fix these issues.</p>
      <h1 className="individualBlogHeading">05. Not following best practices</h1>
      <p className="individualBlogP">Developers are known to do what they think is best! That means they do not follow the best practices of using Bootstrap.</p>
      <p className="individualBlogP">First of all, you should learn bootstrap well, if you do not have fundamental knowledge it’s common to see errors. You can develop the best web pages using bootstrap. Best practice will help you to understand when to use and not to use bootstrap to build web pages. If you can create a project without bootstrap then do. because in that case, your website will not need to load bootstrap CSS and JS files. So for a simple project consider avoiding bootstrap if possible.</p>
      <p className="individualBlogP"> <b>I have a complete course on udemy about <Link>bootstrap with projects</Link>. Check out if you want to learn more about bootstrap.</b></p>
      <p className="individualBlogP"> <b>Thanks for reading and your time, See you soon, till then you take care.</b></p>
                </div>
          <IndividualBlogContact textLeft='JavaScript Books for Beginners to Advanced Developers' textRight='Make money with coding, what you have to be told 🤔'/>
      </div>


      <div className="col-sm-12 col-md-4 col-lg-4">
        <IndividualBlogRightComponent/>
      </div>
    </div>
  </div>
  )
}

export default IndividualBlog4