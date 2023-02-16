import React, {useEffect} from 'react'
import { HistoryMediaCard } from '../../components';
import gsap from 'gsap'
import './styles.scss'

const History = () => {

  useEffect(() => {
    const historyItems = document.querySelectorAll('.historyCard')


    historyItems.forEach((el, i) => {
      gsap.from(el, {position: 'absolute', stagger: .4, bottom: '-20px', scale: .7, webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1.3,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    })
    })

   } ,[])

  return (
    <div className='history__mainBackground' id='history'>
    <div className='background_shadow' />
      <div  className='history__title'>
        <h2>Historia</h2>
      </div>
      <div className='history__mainHolder'>
        <div className='timeline-item'>
          <div className='timeline' />
          <HistoryMediaCard image={process.env.PUBLIC_URL + 'aboutUs.jpg'} date='22.06.2012' title='Bieg Włosika' text='Impreza sportowa odbyła się w Krakowie w czerwcu 2012r. Projekt został wykonany dla ...... Całość trwała miesiąc.'/>
        </div>
        <div className='timeline-item'>
          <div className='timeline' />
          <HistoryMediaCard image={process.env.PUBLIC_URL + 'aboutUs.jpg'} date='22.06.2012' title='Bieg Włosika' text='Impreza sportowa odbyła się w Krakowie w czerwcu 2012r. Projekt został wykonany dla ...... Całość trwała miesiąc.'/>
        </div>
        <div className='timeline-item'>
          <div className='timeline' />
          <HistoryMediaCard image={process.env.PUBLIC_URL + 'aboutUs.jpg'} date='22.06.2012' title='Bieg Włosika' text='Impreza sportowa odbyła się w Krakowie w czerwcu 2012r. Projekt został wykonany dla ...... Całość trwała miesiąc.'/>
        </div>
        <div className='timeline-item'>
          <div className='timeline' />
          <HistoryMediaCard image={process.env.PUBLIC_URL + 'aboutUs.jpg'} date='22.06.2012' title='Bieg Włosika' text='Impreza sportowa odbyła się w Krakowie w czerwcu 2012r. Projekt został wykonany dla ...... Całość trwała miesiąc.'/>
        </div>
        <div className='timeline-item'>
          <div className='timeline' />
          <HistoryMediaCard image={process.env.PUBLIC_URL + 'aboutUs.jpg'} date='22.06.2012' title='Bieg Włosika' text='Impreza sportowa odbyła się w Krakowie w czerwcu 2012r. Projekt został wykonany dla ...... Całość trwała miesiąc.'/>
        </div>
      </div>
    </div>
  )
}

export default History