import React from 'react'
import Resume from '../../assets/Jilani-resume.pdf'

const Data = () => {
  return (
    <div className='data'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Data
