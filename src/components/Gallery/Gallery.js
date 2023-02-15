import React, {useRef, useEffect, useState} from 'react'
import galleryStyles from './styles.js';
import './styles.scss';
import {images} from '../../constants'
import PrismaZoom from 'react-prismazoom'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    outline: 'none',
    height: 'fit-content',
    boxShadow: 24,

  };

const GalleryItem = ({item}) => {
const [open, setOpen] = useState(false);    
const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);

    return (
    <div className='gallery__item'>
        <Modal open={open} onClose={onCloseModal} center>
            <PrismaZoom>
                <img src={item.bigImg} alt='bigPic' /> 
            </PrismaZoom>
      </Modal>
        <img src={item.img} onClick={() => {onOpenModal()}}  alt='/'/>
    </div>
    )
}

const Gallery = ({columns, title, pictures, trafficSign}) => {

  return (
    <div className='gallery__mainContainer_section'>
       
        <div className='gallery_item'>
            <p id={title === 'Galeria' ? 'gallery' : ''}>{title}</p>
            <img src={images[trafficSign]} alt='/' className='section-icon section-icon-1' />
        </div>
        {pictures !== undefined ?
        //NORMAL GALLERY
            <div className='gallery__mainContainer_gallery' data-showup='vertical' >
            <div className='gallery__mainContainer_grid' style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {pictures.map((item, index) => {
                return (
                <div key={index}>
                    <GalleryItem item={item} />
                </div>
                )
            })}
            </div>
        </div>  
        : 
        // KONTAKT
        <div className='gallery__mainContainer_gallery' data-showup='vertical' >
            <div className='gallery__mainContainer_flex'>
                <div>
                    <h2>Facebook:</h2>
                    <img style={{fill: 'red', height: '60px'}} src={images.facebookIcon} alt='facebook' />
                    
                    <h3>szafran-projekt</h3>
                </div>
                <div>
                    <h2>Email:</h2>
                    <img src={images.mailIcon} alt='email' />
                    
                    <h3>szaf.waldemar@gmail.com</h3>
                </div>
                <div>
                <h2>Telefon:</h2>
                    <img src={images.telephoneIcon} alt='phone' />
                    
                    <h3>+48 502 494 555</h3>
                </div>
                
            </div>
        </div>  
        }
        
        </div>
  )
}

  
//   const ContactIcons = () => {
    
//     const contactClick = (e) => {
//         console.log('ding')
//     }

//     return (
//     <Box sx={galleryStyles.gallery__mainContainer_section}>
//         <Box Box position='relative'>
//           <Typography data-showup='vertical'>Kontakt</Typography>
//           <img src={images.d1} alt='/' className='section-icon section-icon-1' />
//         </Box>
//         <Box style={{display: 'flex', margin:'30px 0', justifyContent: 'space-around'}} data-showup='vertical'>
//           <Box sx={galleryStyles.gallery__contact_item}>
//             <FacebookIcon />
//             <Box className='contact-info-holder'>
//                 <Typography variant='h5'>Facebook:</Typography>
//                 <Typography variant='h4'>facebook.pl/szafran-projekt</Typography>
//             </Box>
//           </Box>
//           <Box sx={galleryStyles.gallery__contact_item}>
//             <EmailIcon />
//             <Box className='contact-info-holder'>
//                 <Typography variant='h5'>Email:</Typography>
//                 <Typography variant='h4'>szaf.projekt@gmail.com</Typography>
//             </Box>
//           </Box>
//           <Box sx={galleryStyles.gallery__contact_item} onClick={(e) => {contactClick(e)}}>
//             <PhoneAndroidIcon />
//             <Box className='contact-info-holder'>
//                 <Typography variant='h5'>Telefon:</Typography>
//                 <Typography variant='h4'>+48 502 494 555</Typography>
//             </Box>
//           </Box>

//         </Box>
//     </Box>
//     )
//   }

// export {Gallery, Referendum, ContactIcons}
export {Gallery}