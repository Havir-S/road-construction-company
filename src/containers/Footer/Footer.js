import React, {useEffect} from 'react'
import {images} from '../../constants'
import gsap from 'gsap'
import './styles.scss'
const Footer = () => {

  useEffect(() => {
    const znakKoniec = document.querySelectorAll('.img-background')
    const footerContent = document.querySelectorAll('.footerContent')

    // gsap.from(historyItems, {position: 'absolute', stagger: .4, bottom: '-20px', scale: .7, webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1.3,  ease: 'Power3.easeOut',
    //   scrollTrigger: {
    //     trigger: (i) => {console.log(i)},
    //     start: 'top 80%',
    //     markers: true
    //   }
    // })


      gsap.from(znakKoniec, { position: 'relative', top: '400px', webkitFilter: 'blur(40px)', filter: 'blur(40px)', opacity: 1, autoAlpha: 1, duration: 1.5,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 80%',
        // markers: true
      }
    })

    gsap.from(footerContent, { position: 'relative', bottom: '-80px', stagger: .1, webkitFilter: 'blur(20px)', filter: 'blur(5px)', opacity: 0, autoAlpha: 0, duration: 1.5,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: footerContent,
        start: 'top bottom',
        // markers: true
      }
    })


   } ,[])

  return (
    <div  className='footer__background' id='footer'>
    
      <img src={process.env.PUBLIC_URL + '15a.png'} alt='img' className='img-background' />
      <div  className='footer__mainContainer'>
        <div className='footer__mainContainer_cta'>
          <div  className='footer__mainContainer_cta_background' />
          <div  className='footer__mainContainer_cta_box'>
            <h2 variant='h2'>Zaczynamy współpracę?</h2>
            <div>
              <button className="button button--telesto footerButton" onClick={() => {gsap.to(window, {duration: 1.5, scrollTo: {y :`#services`,  offsetY: 50, autoKill: true}, ease: "power2" });}}><span>Sprawdź usługi</span></button>

              <button className="button button--telesto footerButton" onClick={() => {gsap.to(window, {duration: 1.5, scrollTo: {y :`#contact`,  offsetY: 50, autoKill: true}, ease: "power2" });}}><span>Skontaktuj się</span></button>
            </div>
          </div>
          
        </div>
        <div className='footer__mainContainer_box'>
          <div className='footer-box footer-logo-holder '>
            <img src={process.env.PUBLIC_URL + 'officialLogo.png'} alt='logo' className='footerContent footer-logo' />
          </div>
          <div className='footer-box'>
            <div className='footerContent footerContentAlt'>
              <h3 variant='h3'>Linki</h3>
              <img src={process.env.PUBLIC_URL + 'cautionPaper3.png'} alt='' className='footer-link-cautionPaper' />
              <a href='/'>Usługi</a>
              <a href='/'>Kontakt</a>
              <a href='/'>Pytania</a>
              <a href='/'>Galeria</a>
              <a href='/'>Historia</a>
            </div>   
            <div className='footerContent'>
              <h3 variant='h3'>Adres</h3>
              <img src={process.env.PUBLIC_URL + 'cautionPaper3.png'} alt='' className='footer-link-cautionPaper' />
              <p>Świątniki Górne</p>
              <p>32-040</p>
              <p>ul. Polna 1</p>
            </div>        
            <div className='footerContent'>
              <h3 variant='h3'>Kontakt</h3>
              <img src={process.env.PUBLIC_URL + 'cautionPaper3.png'} alt='' className='footer-link-cautionPaper' />
              <p>Telefon: +48 502 494 555</p>
              <p>Email: <span>szaf.waldemar@gmail.com</span></p>
              <p>Facebook: <span>www.facebook.pl/szafranprojekt</span></p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
