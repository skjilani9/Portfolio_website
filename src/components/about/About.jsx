import React from 'react'
import Me from '../../assets/4B5.jpeg'
import { FaAward } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { AiFillProject } from 'react-icons/ai'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiences</h5>
              <small>1+ year Experiences</small>
            </article>

            <article className='about_card'>
              <AiFillProject className='about_icon' />
              <h5>Projects</h5>
              <small>2+ projects completed</small>
            </article>

            <article className='about_card'>
              <CgWebsite className='about_icon' />
              <h5>Websites</h5>
              <small>10+ websites designed</small>
            </article>
          </div>
          <p>
            <ul>
              <li>
                <b>Full Name</b> : Shaik Abdul Khadar Jilani
              </li>
              <li>
                <b>Father Name</b> : Shaik Basheeruddin
              </li>
              <li>
                <b>Date of Birth</b> : 09-11-2001
              </li>
              <li>
                <b>Address</b> : 11-2-97 vastad street Ambedkar center
              </li>
              <li>
                <b>City</b> : Pithapuram
              </li>
              <li>
                <b>Mobile Num</b>: +91 8309857097
              </li>
              <li>
                <b>Email</b> : shaikjilani2001@gmail.com
              </li>
            </ul>
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
