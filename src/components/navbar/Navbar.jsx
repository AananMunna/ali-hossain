import React from 'react'

import { Link } from "react-router-dom"

import "./navbar.css"

import navbarLogo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg customContainer navbar-bg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src={navbarLogo} alt="navbar-logo" srcset="" className='img-fluid navbar-logo' />
    </Link>
    <button class="navbar-toggler navbar-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navbar-toggle-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active nav-link-style" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-style" to="/about">About Me</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-style" to="/courses">Courses</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-style" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-style lastNavLink" to="/contact">Contact</Link>
        </li>
         
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar