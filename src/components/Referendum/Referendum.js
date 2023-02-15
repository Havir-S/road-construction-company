import React, {useRef, useEffect, useState} from 'react'
import referendumStyles from './styles.js';
import { Box, Container, Typography, Grid, Modal, Button } from '@mui/material'
import {images} from '../../constants'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ReferendumItem = () => {
    const [open, setOpen] = useState(false);
    const [openPic, setOpenPic] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    console.log('aaa')
    return (
    <Box sx={referendumStyles.gallery__item}>
        <img src={images.pdfSmall}  alt='/'/>
    </Box>
    )
}

const Referendum = () => {

  return (
    <Box sx={referendumStyles.referendum__mainContainer_section}>
                <Box Box position='relative'>
                  <Typography data-showup='vertical' >Referendum</Typography>
                  <img src={images.a14} alt='/' className='section-icon section-icon-1' />
                </Box>
                <Box sx={referendumStyles.referendum__mainContainer_gallery} data-showup='vertical' >
                  <Grid container  justifyContent="center" alignItems="center" width='700px' rowGap={4}>
                    <Grid item xs={6}>
                      <Box>
                        <ReferendumItem />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                      <ReferendumItem />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                      <ReferendumItem />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                      <ReferendumItem />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>  
              </Box>
  )
}

export default Referendum