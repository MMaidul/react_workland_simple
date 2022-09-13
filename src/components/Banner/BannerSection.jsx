import React from 'react'
import './BannerSection.css'

const bannerTitle = ['Welcome To Workland Factory']
const bannerDesc = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel enim quis exercitationem dicta maiores ab voluptatibus explicabo, laborum unde, non illum impedit ea pariatur voluptatem corporis? Corrupti, eaque consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis excepturi magni perferendis sit qui.',
]
const BannerSection = () => {
  return (
    <div className="Banner">
      <h1 className="Banner__title">{bannerTitle}</h1>
      <p className="Banner__desc">{bannerDesc}</p>
      <button>Read More</button>
    </div>
  )
}

export default BannerSection
