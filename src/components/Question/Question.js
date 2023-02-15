import React from 'react'
import { images } from '../../constants';

const Question = ({question, answer}) => {
  return (
    <div className='questions__mainContainer_questionBox_hold accordion-holder'>
                <div className='question_accordion question'>
                  <div className='question_accordion_summary'>
                    <div className='question_accordion_helpCenterIcon'>
                      <img src={images.question2} alt='questionMark' />
                    </div>
                    <p>{question}</p>
                    <div className='question_accordion_openIcon'>
                      <img src={images.caret2} alt='questionMark' />
                    </div>
                  </div>
                  <div className='question_accordion_details'>
                    <p>
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
  )
}

export default Question