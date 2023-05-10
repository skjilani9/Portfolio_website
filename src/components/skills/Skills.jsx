import React from 'react'
import { HiBadgeCheck } from "react-icons/hi"
import './skills.css'

const Skills = () => {
  const frontendskills = [
    "HTML",
    "CSS",
    "JavaScprit",
    "BootStrap",
    "React Js"
  ]
  return (
    <section id='skills'>
      <h5>What skills i Have</h5>
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="frontend_skil">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            {frontendskills.map((item) => (
              <article key={item} className='skills_details'>
                <HiBadgeCheck className="skills_icon" />
                <div>
                <h4>{item}</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="backend_skil">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className='skills_details'>
              <HiBadgeCheck className="skills_icon" />
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details'>
              <HiBadgeCheck className="skills_icon" />
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details'>
              <HiBadgeCheck className="skills_icon" />
              <div>
              <h4>My SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <HiBadgeCheck className="skills_icon" />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <HiBadgeCheck className="skills_icon" />
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
