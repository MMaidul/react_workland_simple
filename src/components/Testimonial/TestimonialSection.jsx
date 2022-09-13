import React from 'react'
import './TestimonialSection.css'

const TestimonialSection = () => {
  return (
    <div className="testimonial">
      <h2>Testimonial</h2>
      <div className="testimonial__container">
        <div className="testimonial__card">
          <div className="testimonial__profile">
            <img
              src="/src/assets/Imgs/testimonial-1.jpg"
              alt="feedback person 1"
              className="testimonial__img"
            />
            <div className="testimonial__info">
              <h1 className="testimonial__name">John Doe</h1>
              <h4 className="testimonial__title">
                AlhearXperts Agency,
                <small>CEO</small>
              </h4>
            </div>
          </div>
          <p className="testimonial__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
            nesciunt, adipisci nobis optio, labore provident unde non sapiente
            consequuntur culpa! Vitae unde laudantium incidunt, vel id dolorem
            sed veniam!
          </p>
        </div>
        <div className="testimonial__card">
          <div className="testimonial__profile">
            <img
              src="/src/assets/Imgs/testimonial-2.jpg"
              alt="feedback person 1"
              className="testimonial__img"
            />
            <div className="testimonial__info">
              <h1 className="testimonial__name">John Doe</h1>
              <h4 className="testimonial__title">
                AlhearXperts Agency,
                <small>CEO</small>
              </h4>
            </div>
          </div>
          <p className="testimonial__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
            nesciunt, adipisci nobis optio, labore provident unde non sapiente
            consequuntur culpa! Vitae unde laudantium incidunt, vel id dolorem
            sed veniam!
          </p>
        </div>
        <div className="testimonial__card">
          <div className="testimonial__profile">
            <img
              src="/src/assets/Imgs/testimonial-3.jpg"
              alt="feedback person 1"
              className="testimonial__img"
            />
            <div className="testimonial__info">
              <h1 className="testimonial__name">John Doe</h1>
              <h4 className="testimonial__title">
                AlhearXperts Agency,
                <small>CEO</small>
              </h4>
            </div>
          </div>
          <p className="testimonial__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore
            nesciunt, adipisci nobis optio, labore provident unde non sapiente
            consequuntur culpa! Vitae unde laudantium incidunt, vel id dolorem
            sed veniam!
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
