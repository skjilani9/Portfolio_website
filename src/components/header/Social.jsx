import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='social'>
      <a href="hhttps://github.com/skjilani9" target='_blank'><BsGithub /></a>
      <a href="https://www.linkedin.com/in/shaik-jilani-013bbb211/" target='_blank'><AiFillLinkedin /></a>
      <a href="https://wa.me/918309857097" target='_blank'><BsWhatsapp /></a>
    </div>
  )
}

export default Social

