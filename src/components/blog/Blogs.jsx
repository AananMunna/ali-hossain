import React from 'react'
import './blog.css'
import blogImg1 from '../../assets/blog/Why-So-Many-Programmers-Are-Quitting-min.jpg'
import blogImg2 from '../../assets/blog/Will-chatgpt-replace-your-job.jpg'
import blogImg3 from '../../assets/blog/Code.jpg'
import blogImg4 from '../../assets/blog/Common-Bootstrap-Mistakes-To-Avoid.jpg'
import blogImg5 from '../../assets/blog/JavaScript-Books-for-Beginners-to-Advanced-Developers.jpg'
import blogImg6 from '../../assets/blog/Best-Way-to-learn-code.jpg'

import { BsFillPersonFill } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import Blog from './Blog';
import Navigation from './Navigation'

const Blogs = () => {
  return ( 
    <div className="container-fluid blog-bg px-4 pt-5 pb-4  ">
      <div className="row">
        <Blog 
        blogImg={blogImg1} 
        blogHeading='The Burnout Epidemic in the Programming Industry'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='January 20, 2023'
        blogText='People quit their programming education for a number of varied reasons. I know you do not want to be a'
        url='/individualBlog1'
        />
        <Blog 
        blogImg={blogImg2} 
        blogHeading='Will chatgpt replace your job? 🤖'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='January 6, 2023'
        blogText='Hello and welcome! Today, I want to talk about the question on everyone’s mind: will chatbots like ChatGPT replace human'
        url='/individualBlog2'
        />
        <Blog 
        blogImg={blogImg3} 
        blogHeading='Make money with coding, what you have to be told 🤔'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='December 13, 2022'
        blogText='It’s easy to learn code and if you consistently learn code and practice, it’s just a matter of time to'
        url='/individualBlog3'
        />
        <Blog 
        blogImg={blogImg4} 
        blogHeading='Common Bootstrap Mistakes To Avoid'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='December 9, 2022'
        blogText='Bootstrap is one of the best CSS frameworks. But, do you know that many developers make mistakes when they use'
        url='/individualBlog4'
        />
        <Blog 
        blogImg={blogImg5} 
        blogHeading='JavaScript Books for Beginners to Advanced Developers'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='October 7, 2022'
        blogText='If you want to become a web developer there are lots of options, you can start with python, PHP, Java,'
        url='/individualBlog5'
        />
        <Blog 
        blogImg={blogImg6} 
        blogHeading='Best Way to learn code'
        blogIcon1={<BsFillPersonFill/>}
        blogSpan1='by Ali Hossain •'
        blogIcon2={<SlCalender/>}
        blogSpan2='June 7, 2022'
        blogText='No matter what you want to be, it may be a web developer, software developer, or game developer, you have'
        url='/individualBlog6'
        />
      </div>
      <Navigation
       first = 'Page 1 of 2'
       second = '1' 
       third = '2'
       fourth = 'Next'
       firstLink = '/blog'
       secondLink = '/blogs2'
       thirdLink = '/blogs2'
       className1 = 'bg-primary'
       className2 = ' '
       className3 = ' '
       />
    </div> 
  )
}

export default Blogs