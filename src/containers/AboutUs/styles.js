import { rgbToHex } from '@mui/material';
import {images} from '../../constants'


// RGB(9, 10, 26)
// RGB(6, 8, 14)
// RGB(38,38,38)
// RGB(156,148,16)


const aboutUsStyles = {
    aboutUs__background: {
      backgroundColor: 'rgba(6, 8, 14, 1)',
      background: `url(${images.pattern13})`,
      // background: `url(${images.p43})`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 100%',
      // background: `url(${images.dark2})`,
      // backgroundRepeat: 'repeat no-repeat',
      // backgroundSize: '200px',
      height: 'fit-content',
      position: 'relative',
      zIndex: '10',
      // background: `url(${images.cranes2})`,
      // backgroundSize: 'fit',
      // backgroundRepeat: 'no-repeat, no-repeat',
      // backgroundPosition: 'bottom center'
    },
    aboutUs__cautionPaper: {
      position: 'absolute',
      zIndex: 9,
      top: 0,
      height: '20px',
      width: '100%',
      boxShadow: '0 6px 3px 5px rgba(0,0,0,0.4)',
      background: `url(${images.cautionPaper2})`,
      backgroundRepeat: 'repeat no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '200px',
  },
  aboutUs__mainContainerBackground: {
    height: '320px',
    width: '100%',
    margin: '0px auto',
    position: 'relative',
    // backgroundColor: 'rgb(237, 225, 26)',
    // background: `url(${images.p6})`,
    // backgroundRepeat: 'repeat no-repeat',
    boxShadow: '0 5px 10px 7px rgba(0,0,0,.7), 0 -5px 10px 7px rgba(0,0,0,.7)',
    // backgroundSize: '2000px ',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    // "&::before": {
    //   content: "''",
    //   // border: '2px solid red',
    //   background: `url(${images.p3})`,
    //   transform: 'rotate(-90deg)',
    //   height: '100%',
    //   position: 'absolute',
    //   width: '100%',
    // },
  },
  aboutUs__mainContainerBackground_spin: {
    width: '100%',
    position: 'absolute',
    top: '-200%',
    // transform: 'rotate(-90deg)',



    top: '-300%',
    height: '600%',
    background: `url(${images.p7})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'rotate360 35s linear infinite', 

    // top: '-300%',
    // height: '600%',
    // background: `url(${images.p20})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // animation: 'rotate360 15s linear infinite',

    // height: '400%',
    // background: `url(${images.p7})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // animation: 'rotate360 15s linear infinite',

    // height: '400%',
    // background: `url(${images.p6})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // animation: 'rotate360 15s linear infinite',

  },
  aboutUs__mainContainer: {
    // border: '1px solid rgba(255,255,255,1)',
    
    height: '320px',
    position: 'relative',
    "& img": {
      position: 'absolute',
      top: '-53%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: 9,
      // boxShadow: '0 0 3px 5px rgba(255,255,255,1)'
    },
  },
  // aboutUs__mainContainer_picture: {
  //   height: '300px',
  //   width: '300px',
  //   borderRadius: '50%',
  //   position: 'relative',
  //   top: '-40%',
  //   left: '50%',
  //   transform: 'translate(-50%, 0)',
  //   background: `url(${images.aboutUs3})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover'
  // },
  aboutUs__text: {
    color: '#fff',
    width: '700px',
    padding: '40px 10px 10px',
    fontSize: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(-45deg, rgba(0,0,0,.8),rgba(0,0,0,.95))',
    border: '10px solid var(--goldenColor2)',
    borderRadius: '5px',
    boxShadow: '0 0 10px 3px rgba(0,0,0,1)',
    // border: '1px solid red',
    position: 'relative',
    margin: '40px auto',
    "& .MuiTypography-root": {
      textAlign: 'center',
      background: `rgba(0,0,0,1)`,
      padding: '10px',
      border: '8px solid var(--goldenColor2)',
      
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%,0)',
      bottom: '100%'
    }
  },
  aboutUs__endPic: {
    background: `url(${images.img15a})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // filter: 'contrast(0%)',
    my: '50px',
    height: '410px',
  }
  // aboutUs__mainContainer_grid: {
  //   color: '#fff',
  //   textAlign: 'center',
  //   border: '1px solid green',
  //   height: '100%'
  // },
  // aboutUs__mainContainer_gridText: {
  //   "& div": {
  //     textAlign: 'left',
  //     margin: 'auto',
  //     width: '400px'
  //   }
  // },
  // aboutUs__mainContainer_gridPic: {
  //   textAlign: 'center',
  //   position: 'relative',
  //   "& .aboutUsPic": {
  //     width: '400px',
  //     height: '400px',
  //     borderRadius: '50%',
  //     background: `url(${images.aboutUs1})`,
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover'
  //   }
  // }
}

export default aboutUsStyles;