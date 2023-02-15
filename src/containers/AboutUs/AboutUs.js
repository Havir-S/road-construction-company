
import React, {useEffect, useRef, useState} from 'react'
import aboutUsStyles from './styles'
import './styles.css'
import {Box, Container, Typography, Button, Stack} from '@mui/material'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import { Scale } from '@mui/icons-material';
import {images, videos} from '../../constants'

import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const cautionPaper = useRef(null);
 


  //ANIMATION USEEFFECT
  useEffect(() => {
    const caution = cautionPaper.current;
    gsap.to(caution, {position: 'sticky', top: `${76}px`, height: '20px'})
  }, [])


  return (
    <Box sx={aboutUsStyles.aboutUs__background} id='aboutUs'>
      <Box sx={aboutUsStyles.aboutUs__cautionPaper} ref={cautionPaper}></Box>
      <Box  sx={aboutUsStyles.aboutUs__mainContainerBackground}>
        <Box width='100%' height='100%' overflow='hidden' position='absolute'>
          <Box sx={aboutUsStyles.aboutUs__mainContainerBackground_spin}/>
        </Box>
        <Container sx={aboutUsStyles.aboutUs__mainContainer} >

          <img src={images.officialLogoOnlyPicShadow2} alt='logo' />
          
        </Container>
        
        
      </Box>

      <Box sx={aboutUsStyles.aboutUs__text}>
          <Typography variant='h2'>O NAS</Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          {/* <Box sx={aboutUsStyles.aboutUs__endPic}></Box> */}
      </Box>
      <hr style={{border: '1px solid var(--goldenColor2)', width: '60%', margin: '20px auto'}} />
      
    </Box>
  )

}

export default AboutUs