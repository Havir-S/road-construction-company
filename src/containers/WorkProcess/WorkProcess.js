import React, {useEffect} from 'react'
import workProcessStyles from './styles.js'

import gsap from 'gsap'
import './styles.scss'

const WorkProcess = () => {


  useEffect(() => {
    const textNodes = document.querySelectorAll('.workProcess-box p')

    gsap.from(textNodes, {position: 'relative', stagger: .05, bottom: '-20px', scale: .01, webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '#workProcess',
        start: 'top 50%',
        // markers: true
      }
    })
  }, [])

  return (
    <div className='workProcess__background' id='workProcess'>
      <div className='workProcess__mainContainer'>
        <h1 variant='h1'>Jak wygląda proces pracy</h1>
        <h3 variant='h3'>Przykład</h3>
        <div className='workProcess__mainContainer_dots'>
          <div />
          <div />
          <div />
        </div>
        <div className='workProcess__workContainer workProcess-div'>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Start</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Zaczynamy pracę nad Twoim projektem</h4>
          </div>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Inwentaryzacja</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Przyjeżdżamy na miejsce, sprawdzamy znaki drogowe</h4>
          </div>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Projektowanie</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Nakładamy znaki na mapę i przygotowujemy specjalne tymczasowe oznakowie drogowe</h4>
          </div>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Czekanie na opinie policji</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Opinia policji jest wymagana przed wdrożeniem projektu w życie</h4>
          </div>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Dostarczenie projektów do wyznaczonych biur</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Gmina, starosta lub inni przedstawiciele miejscowości muszą zostać poinformowani o zachodzących zmianach</h4>
          </div>
          <div className='workProcess-item'>
            <div className='workProcess__workContainer_textContainer'>
              <h2>Przekazanie projektu do firmy wykonawczej</h2>
            </div>
              <div className='timeline' />
              <h4 className='workprocess-subtext'>Gdy projekt przejdzie cały proces, firma wykonawcza może zacząć pracę w wyznaczonym przez projekt terminie</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProcess