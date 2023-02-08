import React from 'react'

import { Link } from "react-router-dom"
import { IoIosArrowDropright } from 'react-icons/io';
import individualBlogRightImg1 from '../../assets/blog/bmc_qr-300x300.png'  
import individualBlogRightImg2 from '../../assets/blog/EN-300x600-1.jpg'

const IndividualBlogRightComponent = () => {
  return (
    <>
              <div className="individualBlogLeft mb-4">
            <div className="individualBlogSearchText">Search</div>
            <div class="input-group">
  <input type="search" class="form-control individualBlogSearchInp" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary individualBlogSearchBtn">search</button>
</div>
          </div>
          <div className="individualBlogLeft mb-4">
            <div className="individualBlogRightImg1H1"> Buy Me A Coffee
</div>
            <img src={individualBlogRightImg1} alt="individualBlogRightImg1" 
             className='img-fluid individualBlogRightImg1'/>
             <a href="https://www.buymeacoffee.com/aliHossain" target="_blank"><button className='individualBlogRightImg1Btn'>Buy Me a Coffee</button></a>
          </div>
          <div className="individualBlogLeft mb-4">
            <div className="individualBlogRightResentPostH1">Recent Posts</div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link to="/individualBlog1"><div className="individualBlogRightResentPostLink">The Burnout Epidemic in the Programming Industry</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link to="/individualBlog2"><div className="individualBlogRightResentPostLink">Will chatgpt replace your job? 🤖</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link to="/individualBlog3"><div className="individualBlogRightResentPostLink">Make money with coding, what you have to be told 🤔</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link to="/individualBlog4"><div className="individualBlogRightResentPostLink">Common Bootstrap Mistakes To Avoid</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link to="/individualBlog5"><div className="individualBlogRightResentPostLink">JavaScript Books for Beginners to Advanced Developers</div></Link>
            </div>
          </div>
          <div className="individualBlogLeft mb-4">
            <div className="individualBlogRightResentPostH1">Pick Web Hosting Plan 👇</div>
            <div className="individualBlogRightHostingSubH1 mb-3">Discount Coupon Code: PROCODERBD (7% OFF ) 👏</div>
            <img src={individualBlogRightImg2} className='img-fluid' alt="individualBlogRightImg2" />
            <a href="https://www.hostinger.com/web-hosting?irclickid=zLEx9QycpxyIUMeSSFXXc0SyUkA3WpSmkzxN2I0&irgwc=1&PID=3136671" target="_blank"><button className="individualBlogRightHostingBtn">Pick Web Hosting Plan</button></a>
          </div>
          <div className="individualBlogLeft">
            <div className="individualBlogRightResentPostH1">Categories</div>
             <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link><div className="individualBlogRightResentPostLink">Programming</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link><div className="individualBlogRightResentPostLink">Tips and Tricks</div></Link>
            </div>
            <div className="d-flex individualBlogIconAndLink">
              <div className="individualBlogRightResentPostIcon"><IoIosArrowDropright/></div>
              <Link><div className="individualBlogRightResentPostLink">Web Development</div></Link>
            </div>
          </div>
    </>
  )
}

export default IndividualBlogRightComponent