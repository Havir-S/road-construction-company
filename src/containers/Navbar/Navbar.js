import React, {useState, useEffect, useRef} from 'react'
import './styles.scss';
import gsap from 'gsap'
import {Hamburger} from '../../components'
import {navbarLinks} from '../../constants'

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const appBarRef = useRef(null)
  const appBarHamburgerMenuRef = useRef(null)
  const [hamburgerState, setHamburgerState] = useState(false);
  const cautionPaper = useRef(null)

  function moveToSection(section) {
    const mql = window.matchMedia('screen and (max-width: 485px)');

    //CLEANUP AFTER CLICKING LINK
    if (mql.matches && hamburgerState) {
      setHamburgerState((prevState) => (!prevState))
    }
    //MOVE TO SECTION
    gsap.to(window, {duration: 1.5, scrollTo: {y :`#${section.getAttribute('data-linkto')}`,  offsetY: 150, autoKill: true}, ease: "power2" });
  }

  function handleHamburger() {
    setHamburgerState((prevState) => (!prevState))
  }

  //IF SCREEN SMALLER THAN 450PX == OPEN FULLSCREEN MENU + HIDE SCROLLBAR
  useEffect(() => {
    const mql = window.matchMedia('screen and (max-width: 485px)');
    if (mql.matches && hamburgerState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [hamburgerState])

  useEffect(() => {
    const appBar = appBarRef.current;
    const caution = cautionPaper.current;
    const mql = window.matchMedia('screen and (max-width: 900px)');

    if (mql.matches) {
      //NAVBAR BECOMES STICKY INSTANTLY --- SMALLER THAN 900PX
      gsap.to(appBar, {duration: .5, position: 'fixed', top: 0, padding: '10 10 16', margin: 0, background: 'rgb(6, 8, 22)', })
      document.getElementsByClassName('app-toolbar')[0].classList.add('navBar-sticky')
    } else {
      //NAVBAR REACTS TO SCROLL SCROLL, if below certain point, it becomes FIXED
      gsap.to(appBar, {duration: .5, position: 'fixed', top: 0, padding: '10 10 6', margin: 0, background: 'rgb(6, 8, 22)', 
      scrollTrigger: {
        trigger: '#hero',
        start: '30% 10%',
        endTrigger:"html",
         end:"bottom top",
        toggleActions: 'play reverse reverse reverse',
        toggleClass: { targets: '.app-toolbar', className: 'navBar-sticky'},
    }})
    }

    //CAUTION PAPER
    gsap.to(caution, {duration: .1, display: 'block', scrollTrigger: {
      trigger: '#aboutUs',
      start: 'bottom 100%',
      endTrigger:"html",
      end:"bottom top",
      
      toggleActions: 'play reverse reverse reverse',
    }})
})
  
  return (
      <>
      <div className='appBar' ref={appBarRef} id='appBar' style={{height: '76px'}}>
        <div className='app-toolbar'>
          <div className='img-holder'>
            <img src={process.env.PUBLIC_URL + '/officialLogo.png'} alt='' height='70' style={{verticalAlign: 'middle'}} />
          </div>
          <div  className='links'>
            {navbarLinks.map(link  => (<span className='a_link' key={link.name} data-linkto={link.id} onClick={(e) => moveToSection(e.target)}>{link.name}</span>))}
            <div  className='modeBox'>
            </div>
            <Hamburger handleHamburger={handleHamburger} hamburgerState={hamburgerState} />
          </div>

          
          
        </div>
        <div className='cautionPaperFake' ref={cautionPaper}></div>
      </div>
      <div ref={appBarHamburgerMenuRef} className={'hamburgerNavbar ' + (hamburgerState ? 'hamburgerNavbar-active' : '')}>
          <div className='hamburgerNavbarMenu'>
            <span className='hamburgerNavbarMenu_exit' onClick={() => {setHamburgerState(false)}}>X</span>
            {navbarLinks.map(link  => (<span className='hamburger_link' key={link.name} data-linkto={link.id} onClick={(e) => {setHamburgerState(false); moveToSection(e.target)}}>{link.name}</span>))}
          </div>
      </div>
      </>

  )
}

export default Navbar