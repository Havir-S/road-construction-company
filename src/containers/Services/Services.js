
import React, {useEffect, useRef, useState, useContext } from 'react'
import './styles.css'

import {ChosenServiceContext} from '../../App.js'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import './styles.scss'
import {images} from '../../constants'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {


  const housesContainer = useRef(null)
  const [chosenProject, selectChosenProject] = useState('')

  const title = useRef(null)

  const chosenService = useContext(ChosenServiceContext)

  function handleChosenProject(name) {
    

    //play buildings animation
    if (chosenProject === '') {
      let newEl = document.querySelector(`[data-skyline=${name}]`)

      let timeLine = gsap.timeline();
      timeLine.to(newEl, {duration: 0, y:500}).to(newEl, {duration: 0, display: 'block'}).to(newEl, {duration: 1, y: 0})
    } else
    if (chosenProject !== name && chosenProject !== '') {

      let prevEl = document.querySelector(`[data-skyline=${chosenProject}]`)
      let nextEl = document.querySelector(`[data-skyline=${name}]`)

      let timeLine = gsap.timeline();
      timeLine.to(prevEl, {y: 400, duration: .3}).to(prevEl, { duration: 0, display: 'none'}).to(nextEl,{ duration: 0, y: 400, display: 'block',}).to(nextEl, {duration: .3, y: 0})

     }

     
     selectChosenProject(name);

     //SEND IT TO REACT CONTEXT --- CONTACT
     switch (name) {
      case 'skyline1': 
        chosenService.setChosenService('Szybki i mały projekt');
      break;
      case 'skyline2': 
        chosenService.setChosenService('Zaawansowany projekt');
      break;
      case 'skyline3': 
        chosenService.setChosenService('Kontakt / Pomoc');
      break;
      default:
        console.log('bingo')
      break;
     }

     gsap.to(window, {duration: 1, scrollTo: {y :`#contact`,  offsetY: 150, autoKill: true}, ease: "power2" });


  }
  
  

  //ANIMATION USEEFFECT
  useEffect(() => {
    
    const titleCurrent = title.current;


    //title animation
    gsap.from(titleCurrent, {position: 'relative', bottom: '-30px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
        // markers: true
      }
    })

  }, [])



  return (
    <div className='services__background' id='services'>
      <div className='services__fakeShadow'></div>
    
      <div className='servicesTypography_holder' ref={title}>
        <h2 className='servicesTypography'>Usługi</h2>
       
        {/* <h4 className='servicesTypography_small' style={{color: 'var(--goldenColor2)'}}>Wybór jednej z poniższych opcji <span style={{borderBottom: '2px solid var(--goldenColor2)'}}>NIE JEST WYMAGANY.</span> Pomaga to jednak dobrać najkorzystniejszy czas odpowiedzi i ułatwi nam ustalenie przybliżonego czasu oczekiwania na projekt.</h4> */}
        <h4 className='servicesTypography_small' style={{color: 'var(--goldenColor2)'}}>Oferujemy projekty tymczasowej organizacji ruchu na każdą okazję. Mniejsze i szybsze projekty - dla osób przyłączających gaz/wodę/prąd do działki, aż po imprezy masowe i maratony.</h4>
        <h4 className='servicesTypography_small' style={{color: 'var(--goldenColor2)'}}></h4>
      </div>

      <div className='servicesHolder'>
      <div className='services_background_shadow' />
        <div className='servicesHolder__servicesB'>
          <div className='servicesHolder__servicesB_serviceItem service service1'>

              <div className='choose-arrow bounce2'></div>
              <div className='servicesHolder__servicesB_serviceItem_shadow item-shadow'></div>
              <div className='servicesHolder__servicesB_serviceItem_titleHolder'>
                <h3 variant='h3' className='servicesHolder__servicesB_serviceItem_title'>Mniejszy, szybki projekt</h3>
              </div>
              <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>
 
            <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Rozbudowujesz działkę</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Przyłączasz prąd/gaz/wodę itp.</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Przyłączasz parcelę do jezdni</span></p>
              </div>
            </div>
            
            <div className='servicesHolder__servicesB_serviceItem_button' onClick={() => handleChosenProject('skyline1')}>
              <button><span>Skontaktuj się</span></button>
              </div>
          </div>

          <div className='servicesHolder__servicesB_serviceItem service service2'>
            <div className='choose-arrow bounce2'></div>
            <div  className='servicesHolder__servicesB_serviceItem_shadow item-shadow'></div>
            <div className='servicesHolder__servicesB_serviceItem_titleHolder'>
              <h3  className='servicesHolder__servicesB_serviceItem_title'>Czasochłonny, złożony, wymagający projekt</h3>
            </div>
            <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>

            <div  className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Organizujesz wydarzenie kulturowe</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Organizujesz imprezę sportową bądź masową</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Potrzebujesz projektu drogowego na obchody świąt</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Organizujesz maraton</span></p>
              </div>
            </div>

            
            <div className='servicesHolder__servicesB_serviceItem_button' onClick={() => handleChosenProject('skyline2')}>
              <button><span>Skontaktuj się</span></button>
            </div>
          </div>
          <div  className='servicesHolder__servicesB_serviceItem service service3'>
          
          <div className='choose-arrow bounce2'></div>
            <div className='servicesHolder__servicesB_serviceItem_shadow item-shadow'></div>
            <div  className='servicesHolder__servicesB_serviceItem_titleHolder'>
              <h3  className='servicesHolder__servicesB_serviceItem_title'> Współpraca / Pytanie / Opinia / Kontakt</h3>
            </div>
            <h5 variant='h5' className='servicesHolder__servicesB_serviceItem_subTitle'>Na przykład:</h5>

            <div className='servicesHolder__servicesB_serviceItem_hiddenMessage_holder'>
              <div  className='servicesHolder__servicesB_serviceItem_hiddenMessage hiddenService'>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Nie znalazłeś odpowiedzi na swoje pytanie</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Potrzebujesz profesjonalnej opinii</span></p>
                  <p className='servicesHolder__servicesB_serviceItem_hiddenMessage_text'><span style={{background: 'var(--backgroundColor)', padding: '3px'}}>Chcesz rozpocząć współpracę z naszą firmą</span></p>
              </div>
            </div>

            
            <div className='servicesHolder__servicesB_serviceItem_button' onClick={() => handleChosenProject('skyline3')}>
              <button><span>Skontaktuj się</span></button>
            </div>
          </div>
          
        </div>


      </div>

      
      <div className='servicesHolder__bottom'>
        <div className='servicesHolder__bottom_houses' ref={housesContainer}>

        <div data-skyline='skyline1' style={{backgroundImage: `url(${images.skyline1})`,}}></div>
        <div data-skyline='skyline2' style={{backgroundImage: `url(${images.skyline2})`, }}></div>
        <div data-skyline='skyline3' style={{backgroundImage: `url(${images.skyline3})`, }}></div>




        </div>
        <div className='servicesHolder__bottom_background'>
          <p> Skyline art by <a target='_blank' href='https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document'>Vecteezy</a></p>
          <img src={images.cranes2} alt='' />
        </div>
      </div>
    </div>
  )

}

export default Services