import React from 'react'
import BannerSection from './components/Banner/BannerSection'
import Header from './components/Header/HeaderSection'
import './App.css'
import AboutSection from './components/About/AboutSection'
import ServiceSection from './components/Service/ServiceSection'
import TestimonialSection from './components/Testimonial/TestimonialSection'
import ContactSection from './components/Contact/ContactSection'
import FooterSection from './components/Footer/FooterSection'

const App = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
