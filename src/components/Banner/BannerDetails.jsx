import React from 'react'
import Button from '../../Ui/Button/Button'
import './BannerDetails.css'

const BannerDetails = ({ details }) => {
  const { img, title, desc } = details

  const bannerImg__style = {
    background: img,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="Banner" style={bannerImg__style}>
      <h1 className="Banner__title">{title}</h1>
      <p className="Banner__desc">{desc}</p>
      <Button />
    </div>
  )
}

export default BannerDetails
