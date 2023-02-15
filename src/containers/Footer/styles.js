import {images} from '../../constants'

const footerStyles = {
    footer__background: {
        mt: '-80px',
        "& .img-background": {
            margin: '50px auto 0',
            display: 'block',
            height: '500px',
            position: 'relative',
            bottom: '-100px'
        }
    },
    footer__mainContainer: {
        minHeight: '500px',
        borderTop: '2px solid #aaa',
        position: 'relative',
        zIndex: '1',
        background: `url(${images.panoramaDark2}), var(--backgroundColor)`,
        backgroundPosition: 'bottom center',
        backgroundSize: '1900px',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'normal',
    },
    footer__mainContainer_cta: {
        width: '80%',
        position: 'relative',
        // background: `url(${images.cautionPaper2}), rgba(150,150,0,.03)`,
        // backgroundSize: '900px',
        // backgroundRepeat: 'repeat no-repeat',
        // backgroundBlendMode: 'multiply',
        border: '1px solid yellow',
        borderRadius: '5px',
        top: '-60px',
        margin: 'auto',
        height: '120px',
        overflow: 'hidden'
    },
    footer__mainContainer_cta_background: {
        width: '1000%',
        height: '100%',
        position: 'absolute',
        // border: '1px solid yellow',
        background: `url(${images.cautionPaper2}), rgba(250,50,0,.3)`,
        backgroundSize: '930px',
        backgroundRepeat: 'repeat no-repeat',
        backgroundBlendMode: 'multiply',
        zIndex: '1',
        // animation: 'cautionPaperAnimation 15s linear infinite'
    },
    footer__mainContainer_cta_box: {
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        "& h2": {
            fontSize: '4rem',
            textShadow: '0 0 20px black, 0 0 20px black',
            color: 'white',
            ml: '70px'
        },
        "& div": {
            mr: '20px'
        }
    },
    footer__mainContainer_box: {
       
        position: 'relative',
        height: '300px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1300px',
        "& .footer-box": {
            height: '300px',
            flex: 2,
            "& .footer-logo": {
                margin: 'auto',
                display: 'block',
                objectFit: 'contain',
                height: '120px'
            },
            "& p": {
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
                mt: '2px',

            },
            "& p:first-of-type": {
                mt: '15px'

            },
            "& a": {
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
                mt: '2px',

                transition: 'all .1s ease-in-out',
                "&:hover": {
                    color: 'var(--goldenColor2)'
                }
            },
            "& a:first-of-type": {
                mt: '15px'

            }
        },
        "& .footer-box:nth-child(2)": {
            flex: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        "& h3": {
            color: 'white',
            fontWeight: 'bolder', 
            fontSize: '2.2rem'
        },
        "& .footer-link-cautionPaper": {
            width: '160px',
            my: '10px'
        },
        

    },
    
}

export default footerStyles