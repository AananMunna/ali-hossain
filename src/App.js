import React from 'react'

import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home' 
import Footer from './components/footer/Footer'
import AboutMe from './components/about me/AboutMe'
import Courses from './components/courses/Courses'
import Blogs from './components/blog/Blogs'
import Blogs2 from './components/blog/Blogs2'
import Contact from './components/contact/Contact'
import IndividualBlog1 from './components/blog/IndividualBlog1'
import IndividualBlog2 from './components/blog/IndividualBlog2'
import IndividualBlog3 from './components/blog/IndividualBlog3'
import IndividualBlog4 from './components/blog/IndividualBlog4'
import IndividualBlog5 from './components/blog/IndividualBlog5'
import IndividualBlog6 from './components/blog/IndividualBlog6'
import IndividualBlog7 from './components/blog/IndividualBlog7'
import IndividualBlog8 from './components/blog/IndividualBlog8'
import PopOver from './components/popOver/PopOver'
import ScrollUp from './components/scrollUp/ScrollUp'
import SocialLink from './components/socialLink/SocialLink'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/> 
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <AboutMe/> } /> 
        <Route exact path="/courses" element={ <Courses/> } /> 
        <Route exact path="/blog" element={ <Blogs/> } /> 
        <Route exact path="/blogs2" element={ <Blogs2/> } /> 
        <Route exact path="/contact" element={ <Contact/> } /> 
        <Route exact path="/individualBlog1" element={ <IndividualBlog1/> } /> 
        <Route exact path="/individualBlog2" element={ <IndividualBlog2/> } /> 
        <Route exact path="/individualBlog3" element={ <IndividualBlog3/> } /> 
        <Route exact path="/individualBlog4" element={ <IndividualBlog4/> } /> 
        <Route exact path="/individualBlog5" element={ <IndividualBlog5/> } /> 
        <Route exact path="/individualBlog6" element={ <IndividualBlog6/> } /> 
        <Route exact path="/individualBlog7" element={ <IndividualBlog7/> } /> 
        <Route exact path="/individualBlog8" element={ <IndividualBlog8/> } /> 
    </Routes>
    <SocialLink/>
    <ScrollUp/>
    <PopOver/> 
    <Footer/>
    </BrowserRouter>
  )
}

export default App