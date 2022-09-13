import React from 'react'
import AboutDetails from './AboutDetails'

const aboutContainer = [
  {
    id: 1,
    img: '/src/assets/Imgs/pic7.jpg',
    title: 'About us',
    subTitle: 'Get full range of premium Industrial services for your business',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
  },
]

const AboutSection = () => {
  return (
    <div>
      {aboutContainer.map((details) => (
        <AboutDetails key={details.id} details={details} />
      ))}
    </div>
  )
}

export default AboutSection
