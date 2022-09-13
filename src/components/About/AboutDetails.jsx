import React from 'react'
import './AboutDetails.css'

const AboutDetails = ({ details }) => {
  console.log(details)
  const { img, title, subTitle, desc } = details
  return (
    <div className="about">
      <div className="about__img">
        <img src={img} alt="" />
      </div>
      <div className="about__container">
        <h1 className="about__title">{title}</h1>
        <h4 className="about__subTitle">{subTitle}</h4>
        <p className="about__desc">{desc}</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default AboutDetails
