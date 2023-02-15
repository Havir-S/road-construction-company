import React from 'react'
import './styles.scss'
const Hamburger = ({handleHamburger, hamburgerState}) => {
  return (
    // <div onClick={handleHamburger} id="nav-icon2" className={hamburgerState ? 'open' : ''}>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    // </div>
    <div className={'hamburger ' + (hamburgerState ? 'is-active' : '')} id="hamburger-1" onClick={handleHamburger}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
  )
}

export default Hamburger