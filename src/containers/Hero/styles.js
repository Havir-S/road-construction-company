import {images} from '../../constants'

const heroStyles = {
    hero__background: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '10vh',
        // background: `url(${images.panorama2})`,
        // backgroundPosition: 'center 90%',
        backgroundSize: 'cover',
        zIndex: 2,
        position: 'relative',
        
    },
    hero__background_picture_holder: {
        position: 'absolute',
        opacity: 1,
        top: '0',
        left: '0',
        width: '99vw',
        height: '110vh',
        // clipPath: 'polygon(100% 0, 100% 69%, 100% 90%, 85% 100%, 15% 100%, 0 90%, 0 69%, 0 0)',
        overflow: 'hidden'
    },
    hero__background_picture_main: {
        background: `url(${images.img4})`,
        
        // backgroundAttachment: 'local',
        backgroundPosition: 'center 140%',
        backgroundSize: 'cover',
        position: 'absolute',
        opacity: 1,
        top: '0',
        left: '0',
        width: '100%',
        height: '110vh',
        // clipPath: 'polygon(0 100%, 50% 90%, 100% 100%, 100% 0%, 0% 0%)'
        // clipPath: 'polygon(100% 0, 100% 69%, 100% 90%, 85% 100%, 15% 100%, 0 90%, 0 69%, 0 0)',
    },
    hero__background_picture_dark: {

    },
    hero__background_picture: {
        // background: `url(${images.dark2})`,
        backgroundPosition: 'bottom center',
        backgroundSize: '130px',
        backgroundRepeat: 'repeat no-repeat',
        position: 'absolute',
        opacity: 1,
        top: '0',
        left: '0',
        width: '100%',
        height: '110vh',
        // clipPath: 'polygon(0 100%, 50% 90%, 100% 100%, 100% 0%, 0% 0%)'
        // clipPath: 'polygon(100% 0, 100% 69%, 100% 90%, 85% 100%, 15% 100%, 0 90%, 0 69%, 0 0)',
        
    },
    hero__background_picture2: {
        background: `url(${images.dark2a})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        // backgroundRepeat: 'repeat no-repeat',
        position: 'absolute',
        opacity: .6,
        top: '0',
        left: '0',
        width: '100%',
        height: '110vh',
        // clipPath: 'polygon(0 100%, 50% 90%, 100% 100%, 100% 0%, 0% 0%)'
        // clipPath: 'polygon(100% 0, 100% 69%, 100% 90%, 85% 100%, 15% 100%, 0 90%, 0 69%, 0 0)',
    },
    hero__main_holder: {
        maxWidth: 1200,
        textAlign: 'center',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '5',
        "& .sign": {
            fontSize: {xs: '3rem', sm: '3.5rem', md: '4.4rem', lg: '5rem'}
        }
    },
    hero__main_holder_text: {
        margin: '10px 0',
        color: '#fff',
        
    },
    hero__main_holder_text_sub: {
        margin: '10px 20px',
        color: '#fff',
        fontSize: {
            xs: '1.2rem',
            sm: '1.5rem',
        },
        fontStyle: 'italic',
        maxWidth: '800px'
    },
    hero__buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'10px 0',
        gap: '15px'
    },
    hero_chevron: {

        position: 'absolute',
        bottom: '150px'
    }
}

export default heroStyles;