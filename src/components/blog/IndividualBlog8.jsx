import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg8 from '../../assets/blog/Why-PHP-Is-Still-So-Important-for-Web-Development.jpg'
import graph from '../../assets/blog/PHP-Trand-768x477.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog8 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="individualBlogLeft">
          <Link>
          <h1 className="individualBlogHeading individualBlogHeadingLink">Why PHP Is Still So Important for Web Development?</h1>
          </Link>
          <div className="d-flex my-3">
      <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
      <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
      <div className="blogIcon blogIconI"><SlCalender/></div>
      <div className="blogSpan blogSpanI">June 4, 2022</div>
    </div>
    <img src={blogImg8} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">Choosing the right technology partner is the first step in making a successful website. Lots of technologies and methods have been devised in the past few years to develop websites but PHP has emerged as the topmost technology for this.</p>  
    <h1 className="individualBlogHeading">What is PHP?</h1> 
       <p className="individualBlogP">PHP which is an acronym of <b>PHP</b> : <b>H</b>ypertext <b>P</b>reprocessor is an open-source and free server-side language. PHP files can contain text, HTML, CSS, JavaScript as well as PHP code. It can generate dynamic page content. PHP code is executed on the server and the result will return to the browser as plain HTML. It can create, open, read, write, delete, and close files on the server.</p> 
       <p className="individualBlogP ">PHP a server-side language has been rocking for more than 25 years. Recently its popularity is not appalling, according to Stack Overflow’s most popular programming language ranking, from 5th in 2017 to 11th in 2022. But still, nearly 80% of websites use PHP directly or indirectly. Also, Facebook and WordPress still use PHP.</p>
       <img src={graph} alt="graph" className='img-fluid js1' />
       <p>Stack Overflow Trends in 2022</p>
       <h1 className="individualBlogHeading"><b>Why is PHP still so highly used?</b></h1>
       <p className="individualBlogP">PHP is the first server-side language that is easy to embed into HTML and add functionality without needing to call external files for data. But this is not the only reason PHP is widely used. First of all</p>
       <h1 className="individualBlogHeading">01. Learning PHP is easy</h1> 
      <p className="individualBlogP">If you are completely new to the world of programming, starting with PHP can be a good choice. PHP is very easy to learn and its syntax is beginner-friendly. If you want to build a web page it takes a very short amount of time with PHP and learning complicated things on PHP is easy. So barriers to entry with PHP are lower than in other popular languages.</p>  
      <h1 className="individualBlogHeading">02. It’s open-source and versatile</h1>
      <p className="individualBlogP">This also helps developers get started with PHP at zero cost. Most popular PHP framework like <b>Laravel</b> and <b>Symphony</b> helps developers to run a website at zero cost. Also hosting a PHP website is low cost compared to other web technology. This is why many companies’ first priority is PHP-based websites. Another interesting thing is PHP is platform-independent. <b>You can use PHP on Windows, MAC, or Linux machine and most browser supports PHP websites perfectly.</b></p> 
      <h1 className="individualBlogHeading">03. PHP is fast and secure</h1>
      <p className="individualBlogP">When we want to launch a website or want to add a new feature we always have a priority on how fast and secure our website will be and if you run your website with PHP your website will be fast and secure.</p>
      <h1 className="individualBlogHeading">04. Database compatibility</h1>
      <p className="individualBlogP">It’s easy to connect a PHP website with almost any type of database including MySQL, MongoDB, and more. Majorly MySQL is used with PHP but you can utilize other databases too to create a web application in PHP. This feature gives a developer more freedom to choose PHP. Because no matter what type of database you need you can use it on your PHP website.</p> 
      <p className="individualBlogP">Many people choose PHP because of its plenty of resources. There are many more benefits of PHP and because PHP is stable so it’s trusted by many developers. It has excellent community support.</p>
      <p className="individualBlogP">But in the end, it’s all about your project. What type of project you want to build and which technology suits perfectly with its needs that’s matters. Anyway, what do you think about this blog post, let me know in the comment. Thank you for your time. Have a nice day.</p>
                </div>
          <IndividualBlogContact textLeft=' ' textRight='Best practice for writing code comments'/>
      </div>


      <div className="col-sm-12 col-md-4 col-lg-4">
        <IndividualBlogRightComponent/>
      </div>
    </div>
  </div>
  )
}

export default IndividualBlog8