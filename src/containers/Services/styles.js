import {images} from '../../constants'


// RGB(9, 10, 26)
// RGB(6, 8, 14)
// RGB(38,38,38)
// RGB(156,148,16)


const servicesStyles = {
    aboutUs__background: {
        overflow: 'hidden',
        background: 'linear-gradient(0deg, rgba(50,50,50, .3) 5%, var(--backgroundColor) 20%)',
        // mt: '200px',
        // background: `linear-gradient(0deg, var(--darkColor3), var(--backgroundColor))`,

        // backgroundSize: 'cover',
        // backgroundRepeat: 'repeat no-repeat',
        // backgroundSize: '200px',
        height: 'fit-content',
        position: 'relative',
        // background: `url(${images.cranes2})`,
        // backgroundSize: 'fit',
        // backgroundRepeat: 'no-repeat, no-repeat',
        // backgroundPosition: 'bottom center'
    },
    aboutUs__fakeShadow: {
        position: 'absolute',
        top: 0,
        width: '100%',
        // boxShadow: '0 2px 3px 5px rgba(0,0,0,0.4)'
    },
    aboutUs__cautionPaper: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        height: '20px',
        width: '100%',
        boxShadow: '0 6px 3px 5px rgba(0,0,0,0.4)',
        background: `url(${images.cautionPaper})`,
        backgroundRepeat: 'repeat no-repeat',
        backgroundSize: '200px',
    },
    aboutUs__background_dark: {
        background: `url(${images.dark2})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        // backgroundRepeat: 'repeat no-repeat',
        position: 'absolute',
        opacity: .6,
        top: '0',
        left: '0',
        width: '100%',
        height: '120vh',
        // clipPath: 'polygon(0 100%, 50% 90%, 100% 100%, 100% 0%, 0% 0%)'
        clipPath: 'polygon(100% 0, 100% 69%, 100% 90%, 85% 100%, 15% 100%, 0 90%, 0 69%, 0 0)',
    },
    aboutUs__trafficSignsBox: {
        border: '1px solid red',
        "& img": {
            width: '250px',
            display: 'inline-block'
        }
    },
    // aboutUs__container: {
    //     border: '1px solid rgb(156,148,16)',
    //     borderRadius: '8px',
    //     backgroundColor: 'rgb(9, 10, 26)',
    //     boxShadow: '0 2px 7px 6px rgba(0,0,0,0.8)',
    //     height: 'fit-content',
    //     mt: 10,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     padding: '20px',
    //     overflow: 'hidden',
    //     "& img": {
    //         height: 600,
    //         top: 0,
    //         left: 0,
    //         // display: 'inline-block'
    //         // transition: 'all .3s ease-in-out',
    //     },
    //     "& img:hover": {
    //         // transform: 'scale(1.1)',
    //         // transition: 'all .3s ease-in-out',
    //     },
    // },
    aboutUs__firstContainer: {
        mt: '100px',
        position: 'relative',
        width: '100%',
    },
    aboutUs__picturesHolder: {
      // border: '1px solid var(--goldenColor)',
      // backgroundColor: 'rgb(9, 10, 26)',
      // background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab )',
      // background: `url(${images.projektNa2}), rgba(0,0,0, .3)`,
      // background: `url(${images.construction13})`,
      // backgroundBlendMode: 'multiply',
      // animation: 'gradientBG 10s ease infinite',
      backgroundPosition: 'center center',
      overflow: 'hidden',
      backgroundSize: 'cover',
      width: '1400px',
      margin: 'auto',
      borderRadius: '10px',
      position: 'relative',
      height: 830
    },
    aboutUs__picturesHolder_slicesHolder: {

      position: 'absolute',

      "& img": {
        height: 800,
        display: 'none',
        // filter: 'blur(4px)'
    }
    },
    servicesTypography_holder: {
      // background: `url(${images.img13})`,
      // width: '1100px',
      // backgroundBlendMode: 'multiply',
      // animation: 'gradientBG 10s ease infinite',
      backgroundPosition: 'center',
      // backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    },
    servicesTypography: {
      color: 'white',
      fontSize: '2.7rem',
      // pb: '15px',
      // borderBottom: '2px solid var(--goldenColor2)',
      position: 'relative',
      width: 'max-content',
      margin: '60px auto 20px',
      "&::after": {
          position: 'absolute',
          borderBottom: '10px solid var(--goldenColor2)',
          width: '150px',
          top: '140%',
          left: '50%',
          transform: 'translate(-50%,0)',
          content: "''",
      }
  },
  servicesTypography_small: {
    color: 'white',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    // pb: '15px',
    // borderBottom: '2px solid var(--goldenColor2)',
    position: 'relative',
    maxWidth: '700px',
    textAlign: 'center',
    margin: '60px auto 20px',
  },
    servicesHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1800px',
        mt: '50px',
        background: `url(${images.p5})`,
        backgroundSize: 'cover',
        transition: 'all 0.5s linear',
        backgroundPosition: 'top center'
    },

    servicesHolder__servicesB: {
      // border: '2px solid var(--goldenColor)',
      // borderRadius: '5px',
      
      height: '600px',
      width: '100%',
      margin: '80px auto 500px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      "& .service": {
        transition: 'all 0.2s ease-in-out',
      },
      "& .service1": {
        background: `url(${images.construction15a})`,
        backgroundPosition: 'left',
        transition: 'all 0.2s ease-in-out',
        backgroundSize: 'cover',
      },
      "& .service2": {
        background: `url(${images.construction8})`,
        backgroundPosition: 'left center',
        backgroundSize: 'cover',
      },
      "& .service3": {
        background: `url(${images.img13})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },

    },
    servicesHolder__servicesB_serviceItem: {
      position: 'relative',
      width: '400px',
      height: '600px',
      border: '2px solid var(--goldenColor)',
      // borderImage: `url(${images.cautionPaper2}) 2`,
      borderRadius: '5px',
      cursor: 'pointer',  
      transition: 'all .3s ease',
      zIndex: 5,
      // "&:before": {
      //   content: "'aaaa'",
      //   width: '120%',
      //   display: 'block',
      //   position: 'absolute',
      //   left: '50%',
      //   top: '50%',
      //   transform: 'translate(-50%,-50%)',
      //   background: 'green',
      //   border: '2px solid green'
      // },
      "&:hover .item-shadow": {
        background: `linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,0))`,
        transition: 'all 0.3s linear',
      },
      "&:hover": {
        // backgroundPosition: 'top center'
        // width: '500px'
        transform: 'scale(1.1)'
      },
    },
    servicesHolder__servicesB_serviceItem_shadow: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(0deg, rgba(0,0,0,.3), rgba(0,0,0,0))`,
      transition: 'all 0.3s linear',
    },
    servicesHolder__servicesB_serviceItem_titleHolder: {
      position: 'relative',
      width: '100%',
      backdropFilter: 'blur(10px)',
      height: '150px',
      background: `rgba(6,8,14,1)`,
      borderBottom: '2px solid var(--goldenColor)'
    },

    servicesHolder__servicesB_serviceItem_title: {
      margin: 'auto',
      textAlign: 'center',
      width: '400px',
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      fontWeight: 'bolder',
      fontSize: '2.1rem',
      color: 'var(--goldenColor2)',

      textShadow: '0 0 5px black, 0 0 5px black',
      // background: `url(${images.pattern9})`,
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      padding: '15px'
    },
    servicesHolder__servicesB_serviceItem_subTitle: {
      background: `var(--backgroundColor)`,
      width: 'max-content',
      color: 'var(--goldenColor2)',
      margin: 'auto',
      fontSize: '1.2rem',
      border: '2px solid var(--goldenColor)',
      position: 'relative',
      top: '-22px',
      zIndex: 10,
      padding: '3px',
    },
    servicesHolder__servicesB_serviceItem_hiddenMessage_holder: {
      position: 'absolute',
      pt: '30px',
      height: '450px',
      width: '100%',
      bottom: '0',
      overflow: 'hidden',
      background: 'linear-gradient(120deg, rgba(0,0,0,.6), rgba(0,0,0,.1))'
    },
    servicesHolder__servicesB_serviceItem_hiddenMessage: {
      color: 'white',
      textShadow: '0 0 5px black, 0 0 5px black',
      position: 'absolute',
      width: '100%',
      left: '0',
      textAlign: 'center',
      height: '100%'
    },
    servicesHolder__servicesB_serviceItem_hiddenMessage_text: {
      // background: 'var(--backgroundColor)',
      fontSize: '1.2rem',
      textAlign: 'left',
      width: 'max-content',
      maxWidth: '350px',
      padding: '2px 0',
      margin: '5px 0 5px 13px',
      color: '#fff',
      lineHeight: '2rem',
      position: 'relative',

      "&:before": {
        content: '"-"',
        fontWeight: 'bolder',
        // background: 'var(--backgroundColor)',
        padding: '0 2px',

        position: 'absolute',
        right: '100%',
        lineHeight: '2rem',

      }
    },
    servicesHolder__servicesB_serviceItem_button: {
      position: 'absolute',
      left: '50%',
      top: '93%',
      fontSize: '1.6rem',
      transform: 'translate(-50%, 0%)',
      "& button": {
        background: '#000',
        border: '1px solid var(--goldenColor)',
        borderRadius: '3px',
        color: '#fff',
        zIndex: '1',
        "&:after": {
          position: 'absolute',
          content: "''",
          width: '100%',
          height: '0',
          bottom: '0',
          left: '0',
          zIndex: '-1',
           background: '#e0e5ec',
          // background: `url(${images.cautionPaper})`,
          // backgroundSize: '400px 100px',
          // backgroundRepeat: 'repeat no-repeat',
          transition: 'all 0.3s ease',
        },
        "&:hover": {
          color: '#000',
        },
        "&:hover:after": {
          top: 0,
          height: '100%',
        },
        "&:active": {
          top: '2px',
        }
      }
    },




    servicesHolder__servicesBox: {
          position: 'relative',
          width: '320px',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '40px 30px',
          transition: '0.5s',
          "&::before": {
            content:"''",
            position: 'absolute',
            top: 0,
            // left: '50px',
            width: '50%',
            height: '100%',
            textDecoration: 'none',
            background: '#fff',
            borderRadius: '8px',
            // transform: 'skewX(15deg)',
            transition: '0.5s',
          },
          "&::after": {
            content:"''",
            position: 'absolute',
            top: 0,
            // left: '50%',
            width: '50%',
            height: '100%',
            // background: '#fff',
            borderRadius: '8px',
            // transform: 'skewX(15deg)',
            transition: '0.5s',
            filter: 'blur(30px)',
          },
          "&:hover:before, &:hover:after": {
            // transform: 'skewX(0deg)',
            left: '20px',
            // transform: 'translate(-100%, 0)',
            width: 'calc(100% - 90px)',
          },
          "&:nth-child(1):before, &:nth-child(1):after": {
            background: 'linear-gradient(315deg, #F00000, #DC281E)'
          },
          "&:nth-child(2):before, &:nth-child(2):after": {
            background: 'linear-gradient(315deg, #ffcc33, #F2C94C)'
          },
        //   "&:nth-child(3):before, &:nth-child(3):after": {
        //     background: 'linear-gradient(315deg, #52c234, #24FE41)'
        //   },
          "&:nth-child(3):before": {
            background: `url(${images.contact3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // background: 'linear-gradient(315deg, #52c234, #24FE41)'
          },
           "&:nth-child(3):after": {
            // background: 'linear-gradient(315deg, #52c234, #24FE41)'
          },
          "& span": {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5,
            pointerEvents: 'none',
          },
          "& span::before": {
            content:"''",
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            opacity: 0,
            transition: '0.1s',  
            animation: 'animate 2s ease-in-out infinite',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          },
          "&:hover span::before": {
            top: '-50px',
            left: '50px',
            width: '100px',
            height: '100px',
            opacity: 1,
          },
          "& span::after": {
            content:"''",
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            opacity: 0,
            transition: '0.5s',
            animation: 'animateServices 2s ease-in-out infinite',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            animationDelay: '-1s',
          },
          "&:hover span:after": {
            bottom: '-50px',
            right: '50px',
            width: '100px',
            height: '100px',
            opacity: 1,
          },
          "&:hover .services-content": {
            left: '-25px',
            padding: '60px 40px',
          }
    },
    servicesHolder__servicesBox_servicesContent: {
        position: 'relative',
        left: 0,
        padding: '20px 40px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        zIndex: 1,
        transform: '0.5s',
        color: '#fff',
        "& h2": {
            fontSize: '2em',
            color: '#fff',
            mb: '10px',
        },
        "& p": {
            fontSize: '1.1em',
            mb: '10px',
            lineHeight: '1.4em',
        },
        "& a": {
            display: 'inline-block',
            fontSize: '1.1em',
            color: '#111',
            background: '#fff',
            padding: '10px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '700',
            mt: '5px',
            border: '1px solid transparent',
        },
        "& a:hover": {
            background: '#ffcf4d',
            border: '1px solid rgba(255, 0, 88, 0.4)',
            boxShadow: '0 1px 15px rgba(1, 1, 1, 0.2)',
        }
    },
    servicesHolder__bottom: {

        width: '100%',
        height: '300px',
        position: 'absolute',
        bottom: '0',
        left: '0'
    },
    servicesHolder__bottom_houses: {

        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: '1',
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        width: '100%',
        transform: 'translate(-50%, 0)',
        // "& img": {
        //     height: '600px',
        //     display: 'absolute',
        //     objectFit: 'cover',
        //     animation: 'buildingsAppear 1s ease-in-out',
        // }
        "& div": {
            display: 'none',
            // background: `url(${images.skyline1})`,
            backgroundSize: '900px',
            backgroundPosition: 'center bottom',
            height: '350px',
            position: 'absolute',
            bottom: 30,
            // border: '1px solid red',
            width: '100%',
            zIndex: 1,
            backgroundRepeat: 'repeat no-repeat',
        }
    },
    servicesHolder__bottom_background: {
        width: '100%',
        height: '100%',
        // background: `url(${images.cranes2})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'bottom center',
        "& img": {
            zIndex: '2',

            width: '100%',
            height: '100%',
            position: 'absolute',
            bottom: '0',
            left: '0',
            objectFit: 'cover'
        },
        "& p": {
            margin: 'auto',
            color: 'white',
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            zIndex: 6,
            textAlign: 'center'
        }
    },
    test: {
        border: '5px solid green',
        height: '100%',
        width: '50%',
        position: 'absolute',
        top: '0',
        background: `url(${images.contact2})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        borderRadius: '8px',
        left: 50
    }
}

export default servicesStyles;