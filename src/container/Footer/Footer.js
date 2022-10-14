import React from 'react'
import { images } from '../../constants'
// styles
import "./style.scss"

const Footer = () => {

  return (
    <div className='app__footer' id='contacts'>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email..." />
          <a href="mailto:rr396312@gmail.com" className='p-text'>rr396312@gmail</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile..." />
          <a href="tel:(+91) 9354798704" className='p-text'>(+91) 9354798704</a>
        </div>
      </div>

    </div>
  )
}

export default Footer