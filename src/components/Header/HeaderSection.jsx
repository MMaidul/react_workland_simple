import React from 'react'
import './HeaderSection.css'
const Header = () => {
  return (
    <div>
      <header>
        <nav className="header">
          <a href="" className="header__logo">
            <img src="/src/assets/Imgs/logo.png" alt="" />
          </a>
          <ul className="header__menu">
            <li className="header__item">
              <a href="" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                About
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Servie
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Testimonial
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Contacts
              </a>
            </li>
            <li className="header__item">
              <a href="" className="header__link">
                Log in/Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
