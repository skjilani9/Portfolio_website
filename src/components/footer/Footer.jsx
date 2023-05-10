import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jilani</a>
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#service">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_social'>
        <a href="https://wa.me/918309857097" target='_blank'><BsWhatsapp /></a>
        <a href="https://www.facebook.com/shaik.jillu.786/" target='_blank'><BsFacebook /></a>
        <a href="https://www.instagram.com/livincooling/" target='_blank'><BsInstagram /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Jilani. All Rights Reserved</small>
      </div>

    </footer>
  )
}

export default Footer
