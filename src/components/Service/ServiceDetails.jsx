import React from 'react'
import './ServiceDetails.css'

const ServiceDetails = ({ details }) => {
  console.log(details)
  const { title, img, desc } = details
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__card">
          <img src={img} className="service__img" alt="" />
          <div className="service__content">
            <h1 className="service__title">{title}</h1>
            <p className="service__desc">{desc}</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
