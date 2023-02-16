
import React, {useEffect, useRef, useState, useContext } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import './styles.scss'
import {images} from '../../constants'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {


  const housesContainer = useRef(null)
  const title = useRef(null)


  

  //ANIMATION USEEFFECT
  useEffect(() => {
    
    const titleCurrent = title.current;


    //title animation
    gsap.from(titleCurrent, {position: 'relative', bottom: '-30px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
      }
    })

  }, [])



  return (
    <div className='services__background' id='services'>
      <div className='services__fakeShadow'></div>
    
      <div className='servicesTypography_holder' ref={title}>
        <h2 className='servicesTypography'>Usługi</h2>
        <h4 className='servicesTypography_small' style={{color: 'var(--goldenColor2)'}}>Oferujemy projekty tymczasowej organizacji ruchu na każdą okazję. Mniejsze i szybsze projekty - dla osób przyłączających gaz/wodę/prąd do działki, aż po imprezy masowe i maratony.</h4>
      </div>

      <div className='servicesHolder'>
      <div className='services_background_shadow' />
        <div className='servicesHolder__servicesB'>
          <div className='servicesHolder__servicesB_serviceItem service service1'>

              <div className='choose-arrow bounce2' />
              <div className='servicesHolder__servicesB_serviceItem_shadow item-shadow' />
              <div className='servicesHolder__servicesB_serviceItem_titleHolder'>
                <h3 variant='h3' className='servicesHolder__servicesB_serviceItem_title'>Mniejszy, szybki projekt</h3>
              </div>
              <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>
 
            <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span>Rozbudowujesz działkę</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Przyłączasz prąd/gaz/wodę itp.</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Przyłączasz parcelę do jezdni</span></div>
              </div>
            </div>
            
            <div className='servicesHolder__servicesB_serviceItem_button'>
              <button><span>Skontaktuj się</span></button>
              </div>
          </div>

          <div className='servicesHolder__servicesB_serviceItem service service2'>
            <div className='choose-arrow bounce2' />
            <div  className='servicesHolder__servicesB_serviceItem_shadow item-shadow' />
            <div className='servicesHolder__servicesB_serviceItem_titleHolder'>
              <h3  className='servicesHolder__servicesB_serviceItem_title'>Czasochłonny, złożony, wymagający projekt</h3>
            </div>
            <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>

            <div  className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Organizujesz wydarzenie kulturowe</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Organizujesz imprezę sportową bądź masową</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Potrzebujesz projektu drogowego na obchody świąt</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Organizujesz maraton</span></div>
              </div>
            </div>

            
            <div className='servicesHolder__servicesB_serviceItem_button'>
              <button><span>Skontaktuj się</span></button>
            </div>
          </div>
          <div  className='servicesHolder__servicesB_serviceItem service service3'>
          
          <div className='choose-arrow bounce2'/>
            <div className='servicesHolder__servicesB_serviceItem_shadow item-shadow'/>
            <div  className='servicesHolder__servicesB_serviceItem_titleHolder'>
              <h3  className='servicesHolder__servicesB_serviceItem_title'> Współpraca / Pytanie / Opinia / Kontakt</h3>
            </div>
            <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>
            <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div  className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Nie znalazłeś odpowiedzi na swoje pytanie</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Potrzebujesz profesjonalnej opinii</span></div>
                  <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span >Chcesz rozpocząć współpracę z naszą firmą</span></div>
              </div>
            </div>
            <div className='servicesHolder__servicesB_serviceItem_button'>
              <button><span>Skontaktuj się</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='servicesHolder__bottom'>
        <div className='servicesHolder__bottom_houses' ref={housesContainer}>
          <div data-skyline='skyline3' style={{backgroundImage: `url(${images.skyline3})`, }} />
        </div>
        <div className='servicesHolder__bottom_background'>
          <p> Skyline art by <a target='_blank' href='https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document'>Vecteezy</a></p>
          <img src={process.env.PUBLIC_URL + '/cranes2.png'} alt='' />
        </div>
      </div>
    </div>
  )

}

export default Services