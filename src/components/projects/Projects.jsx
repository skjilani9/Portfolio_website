import React from 'react'
import ME1 from '../../assets/portfolio1.jpg'
import ME2 from '../../assets/portfolio2.jpg'
import ME3 from '../../assets/portfolio3.jpg'
import ME4 from '../../assets/portfolio4.jpg'
import ME5 from '../../assets/portfolio5.png'
import ME6 from '../../assets/portfolio6.jpg'
import './project.css'

const Projects = () => {

  const data = [
    {
      id: 1,
      image: ME1,
      title: "Crypto Website",
      Github: "https://github.com/skjilani9/Crypto_website",
      livedemo: "https://jilani-crypto-website.netlify.app"
    },
    {
      id: 2,
      image: ME2,
      title: "Mi Store Clone",
      Github: "https://github.com/skjilani9/Mi-store-clone_website",
      livedemo: "https://jilani-mistore-clone.netlify.app"
    },
    {
      id: 3,
      image: ME3,
      title: "Netflix Home Page",
      Github: "https://github.com/skjilani9/Netflix_home_page",
      livedemo: "https://skjilani9.github.io/Netflix_home_page/netflix.html"
    },
    {
      id: 4,
      image: ME4,
      title: "Wheather checking",
      Github: "https://github.com/skjilani9/Wheather_checking_website",
      livedemo: "https://jilani-weather-checking.netlify.app"
    },
    {
      id: 5,
      image: ME5,
      title: "Ecommerces website",
      Github: "https://github.com/skjilani9/Ecommerce_website",
      livedemo: "https://github.com/skjilani9/Ecommerce_website"
    },
    {
      id: 6,
      image: ME6,
      title: "GoGoFood",
      Github: "https://github.com/skjilani9/GoGoFood_website",
      livedemo: "https://jilanigogofoodwebsite.netlify.app"
    }
  ]

  return (
    <section id='portfolio'>
      <h5>Projects I Did</h5>
      <h2>My Projects</h2>
      <div className="container project_container">

        {data.map(({ id, image, title, Github, livedemo }) => {
          return (
            <article key={id} className='projects_item'>
              <div className="portfolio_image">
                <img src={image} alt="Project image" />
              </div>
              <h3>{title}</h3>
              <div className="project-item-links">
                <a href={Github} className='btn' target='_blank'>Github rep</a>
                <a href={livedemo} className='btn btn-primary' target='_blank'>Live demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
