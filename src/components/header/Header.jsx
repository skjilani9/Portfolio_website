import React from 'react'
import Data from './Data'
import Social from './Social'
import './header.css'

const Header = () => {
  return (
    <header id='#'>
      <div className="container head_container">
        <h5>Hello i'm</h5>
        <h2>Shaik jilani</h2>
        <h5 className='text-light'>Full Stact Developer</h5>
        <Data />
        <Social />
        <div className="me">
          <img src="https://res.cloudinary.com/dycdl8sqx/image/upload/v1680179747/IMG-20230226-WA0535_nhtxty.jpg" alt="me" />
        </div>
        <a href="#contact" className='scrool_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
