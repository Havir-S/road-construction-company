import React, {useEffect, useState, useContext} from 'react'
import contactStyles from './styles'
import './styles.scss'



import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import {images} from '../../constants'
import { WriteToUs } from '../../components';

const Contact = () => {
      
    useEffect(() => {
        const znak1 = document.querySelectorAll('.contactZnak1')
        const znak2 = document.querySelector('.contactZnak2')
        const znak3 = document.querySelectorAll('.contactZnak3')
        

        gsap.from(znak1, {position: 'relative', left: '-400px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        // markers: true
      }
    })

        gsap.from(znak2, {position: 'relative', bottom: '-300px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1.4,   ease: 'Power3.easeOut',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            // markers: true
        }
        })

        gsap.from(znak3, {position: 'relative', right: '-400px', filter: 'blur(5px)', webkitFilter: 'blur(20px)', opacity: 0, autoAlpha: 0, duration: 1,  ease: 'Power3.easeOut',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            // markers: true
        }
        })

    }, [])

  return (
    <div className='contact__background' id='contact' style={{overflow: 'hidden'}}>
        <div>
            <div className='contact__title'>
                <h2>Kontakt</h2>
                <div className='servicesTypography_small' style={{color: 'var(--goldenColor2)', fontWeight: 'bold'}}>
                    Możliwy jest kontakt poprzez rozmowę telefoniczną, facebook bądź e-mail.</div>
            </div>
            
            <div className='contact__row'>
            <div className='contactDiv contactZnak1'>
                <img src={images.znak1} alt=''/>
                <div className='contactInfo'>
                    <p style={{ color: 'white'}}>Telefon:</p>
                    <p style={{ color: 'var(--goldenColor2)'}}>+48 502 494 555</p>
                </div>
            </div>
            <div className='contactDiv contactZnak2'>
                <img src={images.znak2} alt=''/>
                <div className='contactInfo'>
                    <p style={{ color: 'white'}}>Facebook:</p>
                    <p style={{ color: 'var(--goldenColor2)'}}>szafran-projekt</p>
                </div>
            </div>
            <div className='contactDiv contactZnak3'>
                <img src={images.znak3} alt=''/>
                <div className='contactInfo'>
                    <p style={{ color: 'white'}}>Email:</p>
                    <p style={{ color: 'var(--goldenColor2)'}}>szaf.waldemar@gmail.com</p>
                </div>
            </div>
            </div>

            {/* <div sx={contactStyles.contact__secondRow} className='contact__secondRow'>
            
                

                <div sx={contactStyles.contact__googleMapsBox}  className='contact__googleMapsBox contactZnak3'>
                    <div className='contact__googleMapsBox_info'>
                        <p>	&#129145; Świątniki Górne</p>
                        <p> 32-040</p>
                        <p> ul.Polna 1</p>
                    </div>
                    <img src={images.mapTest} alt='googleMaps' />
                </div>
            </div> */}

        </div>

        <div style={{marginTop: '50px'}} className='contact__boxBreak'></div>

    </div>
  )
}

export default Contact