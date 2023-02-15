import React from 'react'

const HistoryMediaCard = ({image, date, title, text}) => {
    return (
            <div  className='historyCard' >
                <div className='historyCard_holder'>
                    <div className='historyCard_img'>
                        <img src={image} alt='img' />
                    </div>
                    <div className='historyCard_date'>{date}</div>
                    <div>
                    <h2 className='historyCard_title'>
                        {title}
                    </h2>
                    <p className='historyCard_text'>
                        {text}
                    </p>
                    </div>
                </div>
            </div>


      );
}

export default HistoryMediaCard