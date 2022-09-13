import React from 'react'
import ServiceDetails from './ServiceDetails'
const serviceSectionObj = [
  {
    img: '/src/assets/Imgs/pic1.jpg',
    title: 'Chemical Refinery',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati commodi aliquid, temporibus quaerat veniam facere. Officiis maxime, maiores beatae explicabo labore placeat sit totam et esse iure natus necessitatibus.',
  },
  {
    id: 1718,
    img: '/src/assets/Imgs/pic1.jpg',
    title: 'Alexa Khufanea',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati commodi aliquid, temporibus quaerat veniam facere. Officiis maxime, maiores beatae explicabo labore placeat sit totam et esse iure natus necessitatibus.',
  },
  {
    id: 1719,
    img: '/src/assets/Imgs/pic1.jpg',
    title: 'Jufuean Aheas',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati commodi aliquid, temporibus quaerat veniam facere. Officiis maxime, maiores beatae explicabo labore placeat sit totam et esse iure natus necessitatibus.',
  },
]

const style = {
  display: 'flex',
  jsutifyContent: 'space-between',
}
const section = {
  padding: '1rem',
}
const ServiceSection = () => {
  return (
    <>
      <h2 style={section}>Our Service</h2>
      <div style={style}>
        {serviceSectionObj.map((details) => (
          <ServiceDetails key={details.id} details={details} />
        ))}
      </div>
    </>
  )
}

export default ServiceSection
