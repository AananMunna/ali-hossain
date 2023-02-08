import React from 'react'
 
 
import blogImg7 from '../../assets/blog/Best-practice-for-writing-code-comments-min.jpg'
import blogImg8 from '../../assets/blog/Why-PHP-Is-Still-So-Important-for-Web-Development.jpg'
 

import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Blog from './Blog';
import Navigation from './Navigation'

const Blogs2 = () => {
  return (
    <div className="container-fluid blog-bg px-4 pt-5 pb-4  ">
    <div className="row">
      <Blog 
      blogImg={blogImg7} 
      blogHeading='The Burnout Epidemic in the Programming Industry'
      blogIcon1={<BsFillPersonFill/>}
      blogSpan1='by Ali Hossain •'
      blogIcon2={<SlCalender/>}
      blogSpan2='January 20, 2023'
      blogText='People quit their programming education for a number of varied reasons. I know you do not want to be a'
      url='/individualBlog7'
      />
      <Blog 
      blogImg={blogImg8} 
      blogHeading='Will chatgpt replace your job? 🤖'
      blogIcon1={<BsFillPersonFill/>}
      blogSpan1='by Ali Hossain •'
      blogIcon2={<SlCalender/>}
      blogSpan2='January 6, 2023'
      blogText='Hello and welcome! Today, I want to talk about the question on everyone’s mind: will chatbots like ChatGPT replace human'
      url='/individualBlog8'
      />
      
    </div>
    <Navigation
       first = 'Page 2 of 2'
       second = 'Prev'
       third= '1' 
       fourth = '2'
       firstLink = '/blog'
       secondLink = '/blog'
       thirdLink = '/blogs2'
       className1 = ' '
       className2 = ' '
       className3 = 'bg-primary'
       />
  </div> 
  )
}

export default Blogs2