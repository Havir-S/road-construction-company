import React, {useState, useEffect, useRef} from 'react'
import navbarStyles from './styles';
import './styles.scss';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {PolishFlag, DarkModeSwitch, Hamburger} from '../../components'
import {PolishFlag, Hamburger} from '../../components'
import {navbarLinks, images} from '../../constants'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





const Navbar = () => {
  // const [hamburger, toggleHamburger] = useState(true);
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
    const appBarHamburgerMenu = appBarHamburgerMenuRef.current;
    const caution = cautionPaper.current;
    const links = document.querySelectorAll('[data-linkto]')
    // console.log(links)

    

    const mql = window.matchMedia('screen and (max-width: 900px)');

    if (mql.matches) {
      //NAVBAR BECOMES STICKY INSTANTLY --- SMALLER THAN 900PX
      gsap.to(appBar, {duration: .5, position: 'fixed', top: 0, padding: '10 10 16', margin: 0, background: 'rgb(6, 8, 14)', })
      document.getElementsByClassName('app-toolbar')[0].classList.add('navBar-sticky')
    } else {
      //NAVBAR REACTS TO SCROLL SCROLL, if below certain point, it becomes FIXED
      gsap.to(appBar, {duration: .5, position: 'fixed', top: 0, padding: '10 10 6', margin: 0, background: 'rgb(6, 8, 14)', 
      scrollTrigger: {
        trigger: '#hero',
        start: '30% 10%',
        endTrigger:"html",
         end:"bottom top",
        //  onUpdate: function() {console.log('a')},
        toggleActions: 'play reverse reverse reverse',
        toggleClass: { targets: '.app-toolbar', className: 'navBar-sticky'},
        // markers: true
    }})
    }

   

    // rgb(6, 8, 14);
    // position: fixed;
    // background: variables.$backgroundColor;
    // left: 0;
    // width: 90%;
    // z-index: 10;
    // height: 76px;
    // appBarHamburgerMenu
    //HAMBURGER MENU IF CAUTION PAPER IS ON
    // gsap.to(appBarHamburgerMenu, {duration: .5, position: 'fixed', height: '75px', width: '90%', left: 0, background: 'rgba(6, 8, 14, 1)', 
    //   scrollTrigger: {
    //     trigger: '#hero',
    //     start: '30% 10%',
    //     endTrigger:"html",
    //      end:"bottom top",
    //     toggleActions: 'play reverse reverse reverse',
    //     toggleClass: { targets: '.app-toolbar', className: 'navBar-sticky'},
    //     // markers: true
    // }})


    //CAUTION PAPER
    gsap.to(caution, {duration: .1, display: 'block', scrollTrigger: {
      trigger: '#aboutUs',
      start: 'bottom 100%',
      endTrigger:"html",
      end:"bottom top",
      
      toggleActions: 'play reverse reverse reverse',
      // markers: true
    }})
})
  
  return (
      <>
      <div className='appBar' ref={appBarRef} id='appBar' style={{height: '76px'}}>
        <div className='app-toolbar' sx={{justifyContent: 'space-between'}}>
          <div className='img-holder'>
            <img src={images.officialLogo} alt='logo' height='70' style={{verticalAlign: 'middle'}} />
          </div>
          <div sx={navbarStyles.links} className='links'>
            {navbarLinks.map(link  => (<a className='a_link' href="javascript:void(0);" key={link.name} data-linkto={link.id} onClick={(e) => moveToSection(e.target)}>{link.name}</a>))}
            <div sx={navbarStyles.flagBox} className='flagBox'>
            {/* FLAG */}
              <PolishFlag />
            </div>
            <div sx={navbarStyles.modeBox} className='modeBox'>
            {/* DARK/LIGHT */}
            {/* <DarkModeSwitch /> */}
            </div>
            <Hamburger handleHamburger={handleHamburger} hamburgerState={hamburgerState} />
          </div>

          
          
        </div>
        <div className='cautionPaperFake' ref={cautionPaper}></div>
      </div>
      <div ref={appBarHamburgerMenuRef} className={'hamburgerNavbar ' + (hamburgerState ? 'hamburgerNavbar-active' : '')}>
          {/* <img src={images.construction13} alt='' /> */}
          <div className='hamburgerNavbarMenu'>
            <Hamburger handleHamburger={handleHamburger} hamburgerState={hamburgerState} />
            {navbarLinks.map(link  => (<a className='hamburger_link' href="javascript:void(0);" key={link.name} data-linkto={link.id} onClick={(e) => moveToSection(e.target)}>{link.name}</a>))}
          </div>
      </div>
      </>

  )
}

export default Navbar