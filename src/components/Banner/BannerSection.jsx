import React from 'react'
import BannerDetails from './BannerDetails'

const bannerObj = [
  {
    id: 1217,
    img: 'url(/src/assets/Imgs/header.jpg)',
    title: 'Welcome To Workland Factory',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel enim quis exercitationem dicta maiores ab voluptatibus explicabo, laborum unde, non illum impedit ea pariatur voluptatem corporis? Corrupti, eaque consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis excepturi magni perferendis sit qui.',
  },
]

const BannerSection = () => {
  return (
    <div>
      {bannerObj.map((details) => (
        <BannerDetails key={details.id} details={details} />
      ))}
    </div>
  )
}

export default BannerSection
