import React from 'react'
import './styles.css'

const PolishFlag = () => {
  return (
    <div className='flag-small'>
        <div style={{width: '100%', height: '50%', backgroundColor: '#F7FCFF'}}></div>
        <div style={{width: '100%', height: '50%', backgroundColor: '#C51918'}}></div>
    </div>
  )
}


const EnglishFlag = () => {
    return (
      <div>Flags</div>
    )
}

const UkrainianFlag = () => {
    return (
        <div>Flags</div>
    )
}

export {PolishFlag, EnglishFlag, UkrainianFlag}