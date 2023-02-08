import React from 'react'

import { Link } from "react-router-dom"
import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import blogImg7 from '../../assets/blog/Best-practice-for-writing-code-comments-min.jpg'
import IndividualBlogContact from './IndividualBlogContact';
import IndividualBlogRightComponent from './IndividualBlogRightComponent';

const IndividualBlog7 = () => {
  return (
    <div className='individualBlog px-4 pt-5'>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8">
        <div className="individualBlogLeft">
          <Link>
          <h1 className="individualBlogHeading individualBlogHeadingLink">Best practice for writing code comments</h1>
          </Link>
          <div className="d-flex my-3">
      <div className="blogIcon blogIconI"><BsFillPersonFill/></div>
      <div className="blogSpan blogSpanI">by <Link> Ali Hossain </Link>Posted on</div>
      <div className="blogIcon blogIconI"><SlCalender/></div>
      <div className="blogSpan blogSpanI">June 4, 2022</div>
    </div>
    <img src={blogImg7} alt="blogImg2" className='img-fluid mb-3' />
    <p className="individualBlogP">If you want to learn code, you have lots of resources. You can read books, or watch tutorials on YouTube or other platforms. No shortage of resources. But there are very few resources about best practices for writing code comments. It’s hard to measure the quality of good comments. A bad comment is worse than no comment at all.</p> 
    <p className="individualBlogP"><b>Now you might ask me, why comments? It’s no matter if I add a comment or not. The program works fine.</b></p>
    <p className="individualBlogP">You are right, your comment will not execute on the program but most of the time, not one person working on a project. That means other people might need to read your code and have to understand it. So it’s important to have comments.</p>
    <h1 className="individualBlogHeading">Remember !! <b>Good code is self-documenting and</b>professional programming means commenting.</h1>
    <h1 className="individualBlogHeading"><b>Why comments are Crucial</b></h1>
       <p className="individualBlogP">There are three main reasons for writing comments in your code:</p>
       <u>
        <li>Communication</li>
        <li>Clarity</li>
        <li>Explanation</li> 
       </u>
       <h1 className="individualBlogHeading">Most of the time we use three types of code comments and they are</h1>
       <u>
        <li><b>Documentation comments.</b>It quickly clarifies the purpose why this code.</li> 
        <li><b>Function comments.</b> It explains the function well</li> 
        <li><b>Logic comments.</b>It explains the logic of clarifying complex code paths.</li> 
       </u>
       <p className="individualBlogP ">Here are some tips to write good comments.</p>
       <h1 className="individualBlogHeading">Tips 01: Write comments while Writing code</h1>
       <p className="individualBlogP">I always write comments while I write code, because most of the time, I forget why I wrote this, Sometimes I feel so lazy to add comments later. so for me, it’s best practice to write comments while writing code.</p>
       <h1 className="individualBlogHeading">Tips 02: Write short yet informative comments.</h1>
       <h3>A famous quote: <b>If you can’t write a clear comment, there may be a problem with the code</b></h3> 
      <p className="individualBlogP">Sometimes you will find some code, that solves a problem in a very complex way. Instead of this way they have an easy way. And the comment is very unclear, in most cases, it’s because the programmer does not understand the problem properly. This type of comment not only spoil time for other developer but also for the developer who worked on the project. So your comment should be straightforward.</p> 
      <p className="individualBlogP"><b><i>Remember!! Your comment should not create confusion, your comment should disappear confusion.</i></b></p>
      <h1 className="individualBlogHeading">Tips 03: Write down why you are doing something</h1>
      <p className="individualBlogP">When you add a new feature or build a logic always add a comment, about why you are doing this. It will help you to understand this later. Most of the time developer forgets, why they added this. You need to read code, sometimes multiple times to understand why you have written this code. So good commenting can save your time.</p> 
      <h1 className="individualBlogHeading">Tips 04: Add comments when fixing bugs</h1>
      <p className="individualBlogP">It’s very important to add comments when you want to fix any bugs or want to include a new feature. Sometimes after fixing a problem, it generates a big issue on the site of a program. In that case, your comment will be a lifesaver. Also, it will be easy to determine, where is the problem.</p>
      <h1 className="individualBlogHeading">Tips 05: Don’t refer to other documents or comments</h1>
      <p className="individualBlogP">If you think you need to add a document to clarify a code’s purpose, it’s a red flag for bad code. You don’t want to spend time searching for other code comments or reading extensive design documents.</p> 
      <h2>Sometimes you might need to add header comments and sometimes you need to use single-line comments. Use these two comment types wisely.</h2>
      <h2><b><i> Do not write a useless comment or comment that does not add or generate any value. Ignore this type of comment.</i></b></h2>
      <p className="individualBlogP">I hope this video helped you a lot to understand why a good comment is important. As Stack Overflow co-founder Jeff Atwood has written, <b>“Code Tells You How. Comments Tell You Why”</b>. If you are able to write good code it can save your time as well as your teammate’s time and frustration.</p>
      <p className="individualBlogP">What do you think about this blog post, let me know in the comment. Thank you for your time. Have a nice day..</p>
                </div>
          <IndividualBlogContact textLeft='Why PHP Is Still So Important for Web Development?' textRight='Best Way to learn code'/>
      </div>


      <div className="col-sm-12 col-md-4 col-lg-4">
        <IndividualBlogRightComponent/>
      </div>
    </div>
  </div>
  )
}

export default IndividualBlog7