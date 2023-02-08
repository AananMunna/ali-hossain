import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg5 from '../../assets/blog/JavaScript-Books-for-Beginners-to-Advanced-Developers.jpg'
import js1 from '../../assets/blog/JavaScript-The-Definitive-Guide-229x300.jpg'
import js2 from '../../assets/blog/Eloquent-JavaScript-218x300.jpg'
import js3 from '../../assets/blog/Head-First-JavaScript-Programming.jpg'
import js4 from '../../assets/blog/JavaScript-Cookbook.jpg'
import js5 from '../../assets/blog/20901022._SX120_.jpg'
import js6 from '../../assets/blog/22221109._SX120_.jpg'
import js7 from '../../assets/blog/22221111._SX120_.jpg'
import js8 from '../../assets/blog/22221108._SX120_.jpg'
import js9 from '../../assets/blog/22221110._SX120_.jpg'
import js10 from '../../assets/blog/25136217._SY180_.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog5 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="individualBlogLeft">
          <Link>
          <h1 className="individualBlogHeading individualBlogHeadingLink">JavaScript Books for Beginners to Advanced Developers</h1>
          </Link>
          <div className="d-flex my-3">
      <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
      <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
      <div className="blogIcon blogIconI"><SlCalender/></div>
      <div className="blogSpan blogSpanI">October 7, 2022</div>
    </div>
    <img src={blogImg5} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">If you want to become a web developer there are lots of options, you can start with python, PHP, Java, or JavaScript. With so many options today, JavaScript is the most preferred language by both entry-level and advanced developers. You can learn JavaScript by reading books or watching tutorials on udemy. You can also follow YouTube videos to learn JavaScript. Now if your preference is to learn JavaScript by reading books then, in this blog post, I will share my book-reading experience. So if you are interested keep reading.</p> 
    <p className="individualBlogP">First of all how to choose the right book? There is no use in having a list with tons of books. You want to learn JavaScript by reading a book. I have read some books on JavaScript, I found some books are beneficial and some are not right for me.</p>
    <p className="individualBlogP">So, how do I figure out which book is worth reading?</p>
    <ul>
      <li>Choose a <b> good author</b> who has the credibility and qualifications to teach JavaScript</li>
      <li>Choose a book that <b> matches your skill level</b>. if you are a beginner then choose a beginner-friendly book and if you are an expert then choose an advanced one.</li>
      <li>Is the book written well enough? Learning programming is not easy, if a book is clear and concise enough that can help make learning a little bit easier.</li>
      <li>Look for other resources. Does the book come with any additional resources such as <b> exercises or a companion website?</b></li>
    </ul>
       <p className="individualBlogP">I have a question, did you ever read any JavaScript books? If yes, which one? what is your experience? Don’t forget to comment. I will love to check that one.</p>
       <Link><h1 className="individualBlogHeading text-primary">01. JavaScript: The Definitive Guide, 7th Edition</h1> </Link>
       <img src={js1} className="img-fluid js1" alt="" />
       <p className="individualBlogP ">This one is a beginner-friendly JavaScript book. If you are interested in powerful web application development then this book is highly recommended. You can’t compare this book with any other books on the market. Most books are designed for beginners. But this book is not only a great pleasure to learn for a beginner yet the best source when you’re working on more complex problems.</p>
       <p className="individualBlogP ">If you want to gain knowledge beyond the basics this is an excellent reference guide. Thorough chapters full of examples describe closure, graphics, prototyping, Asynchronous JavaScript, and Server-Side JavaScript in depth. Each and everything is clearly demonstrated with examples.</p>
<Link><h1 className="individualBlogHeading text-primary">02. Eloquent JavaScript, 3rd Edition</h1></Link>
<img src={js2} alt="js2" className='img-fluid js1' />
       <p className="individualBlogP">This book will help you to write clean and beautiful code. The book starts with the basic structure of JavaScript as well as data structures, control structures, and functions to help you write basic programs. You will also learn about error handling and bug fixing, asynchronous programming, modularity, and lots more. All source codes are available online, so you can edit, run and check output instantly.</p> 
<Link><h1 className="individualBlogHeading text-primary">03. Head First JavaScript Programming</h1></Link>
<img src={js3} alt="js3" className='img-fluid js1' />
       <p className="individualBlogP">This book is for learning JavaScript, what it is good for, what it is not, etc. This is not a reference book. How JavaScript works with browsers and what to learn and what is standard code they explain every now and then. In order to explain a topic properly, they used DOM and innerHTML a lot but also they said it’s not good code, and later they will let you know how to write good code. It is entertaining and by teaching the same concept in multiple ways, I’ve found I have a much higher retention rate when I finish a chapter than I have with any other book.</p> 
<Link><h1 className="individualBlogHeading text-primary">04. JavaScript Cookbook</h1></Link>
       <p className="individualBlogP">When you feel you have a good understanding of JavaScript you can check <Link><b> JavaScript Cookbook</b></Link> for practice and solve problems. Look for the 3rd edition. it’s released in 2021 and it’s great.</p> 
<img src={js4} alt="js4" className='img-fluid js1' />
 <h1 className="individualBlogHeading ">05. You Don’t Know JS</h1> 
       <p className="individualBlogP">I want to recommend a book series if you want to know how JavaScript works behind the seen and that is <b>You Don’t Know JS.</b>This series has 6 books. If you like to program with JavaScript you will love this series.</p> 
    <div className=''>
    <div className="d-flex js1">
    <img src={js5} alt="js5" className='img-fluid' />
    <img src={js5} alt="js5" className='img-fluid ' />
    <img src={js5} alt="js5" className='img-fluid ' />
    </div>
    <div className="d-flex js1">
    <img src={js5} alt="js5" className='img-fluid ' />
    <img src={js5} alt="js5" className='img-fluid ' />
    <img src={js5} alt="js5" className='img-fluid ' />
    </div>
    </div>
    <p className="individualBlogP">That’s all. If you like this post hit the share button. Keep learning see you again.</p>
       
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

export default IndividualBlog5