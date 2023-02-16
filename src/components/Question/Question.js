import React from 'react'

const Question = ({question, answer}) => {
  return (
    <div className='questions__mainContainer_questionBox_hold accordion-holder'>
                <div className='question_accordion question'>
                  <div className='question_accordion_summary'>
                    <div className='question_accordion_helpCenterIcon'>
                      <img src={process.env.PUBLIC_URL + 'question2.svg'} alt='' />
                    </div>
                    <p>{question}</p>
                    <div className='question_accordion_openIcon'>
                      <img src={process.env.PUBLIC_URL + 'caret2.svg'} alt='' />
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