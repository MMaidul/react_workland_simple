import React from 'react'
import './ServiceSection.css'

const ServiceSection = () => {
  return (
    <div className="service">
      <h2 className="title">Our Service</h2>
      <div className="service__container">
        <div className="service__card">
          <img
            src="/src/assets/Imgs/pic1.jpg"
            className="service__img"
            alt=""
          />
          <div className="service__content">
            <h1 className="service__title">Chemical Refinery</h1>
            <p className="service__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              possimus quo laudantium! Aliquam doloremque ullam, officiis,
              nostrum totam nisi, dolore sequi deserunt nesciunt odit fugiat
              maiores? Dolores nemo et voluptas!
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service__card">
          <img
            src="/src/assets/Imgs/pic2.jpg"
            className="service__img"
            alt=""
          />
          <div className="service__content">
            <h1 className="service__title">Chemical Refinery</h1>
            <p className="service__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              possimus quo laudantium! Aliquam doloremque ullam, officiis,
              nostrum totam nisi, dolore sequi deserunt nesciunt odit fugiat
              maiores? Dolores nemo et voluptas!
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service__card">
          <img
            src="/src/assets/Imgs/pic3.jpg"
            className="service__img"
            alt=""
          />
          <div className="service__content">
            <h1 className="service__title">Chemical Refinery</h1>
            <p className="service__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              possimus quo laudantium! Aliquam doloremque ullam, officiis,
              nostrum totam nisi, dolore sequi deserunt nesciunt odit fugiat
              maiores? Dolores nemo et voluptas!
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
