
import React, {useEffect, useRef} from 'react'
import heroStyles from './styles'
import './styles.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'

import {images} from '../../constants'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const mainPic = useRef(null)
  const mainContainer = useRef(null)
  const scrollDown = useRef(null)

  useEffect(() => {
    const pic = mainPic.current;
    const container = mainContainer.current;
    const scroll = scrollDown.current;
    
    gsap.to(scroll, {duration: 1, transform: 'scale(2)', y: 300, opacity: 0, webkitFilter: 'blur(20px)', scrollTrigger: {
      trigger: '#hero',
      start: '25% 10%',
      // markers: true
    }})

    const tl = gsap.timeline();
    tl.from(pic, {opacity: 0, duration: 1, transform: 'scale(1.05)', ease: 'linear'})
      .to(pic, {transform: 'scale(1.5)', duration: 16, repeat: -1, ease: 'linear'})

      // gsap.to(pic, {backgroundImage: `url(${images.panorama2})`, duration: 2}, {backgroundImage: `url(${images.panorama3})`, duration: 2})
      gsap.from(container, {y: 70, opacity: 0, duration: 1, webkitFilter: 'blur(20px)'})
  }, [])

  return (
    <div className='hero__background' id='hero'>
      <div className='hero__background_picture_holder' >
        <div className='hero__background_picture_main' ref={mainPic} />
        <div className='hero__background_picture2' />
      </div>

    
    
        <div className='hero__main_holder' ref={mainContainer}>
            <h3 className='hero__main_holder_textAbv'>ZAJMUJEMY SIĘ</h3>
            <h1 className='hero__main_holder_text sign'><span>Proje<span className="fast-flicker">k</span>t<span className="flicker">a</span>mi Drogo<span className="fast-flicker">w</span><span className="flicker">y</span>mi</span></h1>

            <h5 className='hero__main_holder_text_sub' variant='h5'>
                Projekty tymczasowej zmiany organizacji ruchu są
                wymagane przed rozpoczęciem wszystkich
                prac budowlanych i drogowych.*
            </h5>
            <div className='hero__buttonBox'>
            
            <button className="button bn5" onClick={() => {gsap.to(window, {duration: 1.5, scrollTo: {y :`#services`,  offsetY: 50, autoKill: true}, ease: "power2" });}}><span>Sprawdź usługi</span></button>

            <button className="button bn5"onClick={() => {gsap.to(window, {duration: 1.5, scrollTo: {y :`#contact`,  offsetY: 50, autoKill: true}, ease: "power2" });}}><span>Skontaktuj się</span></button>
            </div>
        </div>
        <div className='hero_chevron' ref={scrollDown}>
          <div className='scrolldown'>
            <div className="chevrons">
              <div className='chevrondown'></div>
              <div className='chevrondown'></div>
            </div>
          </div>
          <div className="arrows"></div>
        </div>
    </div>
  )

}

export default Hero