import React from 'react'
import './HeaderSection.css'

const headerMenus_JSON = [
  'Home',
  'About',
  'Service',
  'Testimonial',
  'Contacts',
  'Log in / Register',
]
const Header = () => {
  const MenuLink = headerMenus_JSON.map((menus) => (
    <li className="header__item">{menus}</li>
  ))
  return (
    <div>
      <header>
        <nav className="header">
          <a href="" className="header__logo">
            <img src="/src/assets/Imgs/logo.png" alt="" />
          </a>
          <ul className="header__menu">{MenuLink}</ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
