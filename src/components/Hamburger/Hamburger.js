import React from 'react'
import './styles.scss'
const Hamburger = ({handleHamburger, hamburgerState}) => {
  return (
    <div className={'hamburger ' + (hamburgerState ? 'is-active' : '')} id="hamburger-1" onClick={handleHamburger}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
    </div>
  )
}

export default Hamburger