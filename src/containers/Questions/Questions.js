import React, {useEffect} from 'react'
import gsap from 'gsap'
import './styles.scss'
import {Question} from '../../components'

const Questions = () => {
  

  useEffect(() => {
    const accordions = document.querySelectorAll('.question_accordion');


    accordions.forEach((el) => {

      el.addEventListener('click',() => {
        console.log('ding')
        el.classList.toggle('accordion-open')
      })
    })



    const questions = document.querySelectorAll('.question_accordion')

        gsap.from(questions, { left: '-100%', opacity: 0, autoAlpha: 0, duration: .2, stagger: .1,
      scrollTrigger: {
        trigger: '#questions',
        start: 'top 80%',
      }
    })

  }, [])

  return (
    <div className='questions__background' id='questions'>
      <div className='questions__fakeShadow' />
        <div className='questions__mainContainer'>
            <h4>F A Q</h4>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <div className='questions__mainContainer_questionBox'>

              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <Question question={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'} />
              <h4 style={{fontStyle: 'italic'}} >* Masz inne pytanie? Skontaktuj się z nami w dziale <span style={{color: 'var(--goldenColor)', fontWeight: 'bold', textDecoration: 'underline'}}>KONTAKT</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Questions