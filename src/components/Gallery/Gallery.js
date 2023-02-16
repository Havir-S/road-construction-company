import React, {useState} from 'react'
import './styles.scss';
import PrismaZoom from 'react-prismazoom'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const pictures = new Array(6).fill(true)

const GalleryItem = () => {
const [open, setOpen] = useState(false);    
const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);

    return (
    <div className='gallery__item'>
        <Modal open={open} onClose={onCloseModal} center>
            <PrismaZoom>
                <img src={process.env.PUBLIC_URL + 'pdfBig.jpg'} alt='bigPic' /> 
            </PrismaZoom>
        </Modal>
        <img src={process.env.PUBLIC_URL + 'pdfSmall.jpg'} onClick={() => {onOpenModal()}}  alt='/'/>
    </div>
    )
}

const Gallery = ({columns, title, trafficSign}) => {

  return (
    <div className='gallery__mainContainer_section'>
       
        <div className='gallery_item'>
            <p>{title}</p>
            <img src={process.env.PUBLIC_URL + `${trafficSign}.png`} alt='/' className='section-icon section-icon-1' />
        </div>
        {title !== 'Kontakt' ?
        //NORMAL GALLERY
            <div className='gallery__mainContainer_gallery' data-showup='vertical' >
            <div className='gallery__mainContainer_grid' style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {pictures.map((item, index) => 
                (<div key={index}>
                    <GalleryItem item={item} />
                </div>)
                )}
            </div>
        </div>  
        : 
        // KONTAKT
        <div className='gallery__mainContainer_gallery' data-showup='vertical' >
            <div className='gallery__mainContainer_flex'>
                <div>
                    <h2>Facebook:</h2>
                    <img style={{fill: 'red', height: '60px'}} src={process.env.PUBLIC_URL + '/facebook.svg'} alt='facebook' />
                    
                    <h3>szafran-projekt</h3>
                </div>
                <div>
                    <h2>Email:</h2>
                    <img src={process.env.PUBLIC_URL + '/envelope-fill.svg'} alt='email' />
                    
                    <h3>szaf.waldemar@gmail.com</h3>
                </div>
                <div>
                <h2>Telefon:</h2>
                    <img src={process.env.PUBLIC_URL + '/telephone-fill.svg'} alt='phone' />
                    
                    <h3>+48 502 494 555</h3>
                </div>
            </div>
        </div>  
        }
        </div>
  )
}

export {Gallery}