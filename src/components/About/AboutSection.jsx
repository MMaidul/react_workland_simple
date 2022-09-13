import React from 'react'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about__img">
        <img src="/src/assets/Imgs/pic7.jpg" alt="" />
      </div>
      <div className="about__container">
        <h1 className="about__title">About Us</h1>
        <h4 className="about__subTitle">
          Get full range of premium Industrial services for your business
        </h4>
        <p className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default AboutSection
