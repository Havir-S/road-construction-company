import React from 'react'
import { Modal } from 'react-responsive-modal';

const LoadingPage = ({open, onCloseModal}) => {
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='loading__background'>
          <div className='loading__holder'>
              <p>ŁADUJĘ</p> 
          </div>      
        </div>
      </Modal>
    </div>
  )
}

export default LoadingPage