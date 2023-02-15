import {images} from '../../constants'

const galleryStyles = {
    gallery__mainContainer_section: {
        position: 'relative',
        "& p": {
            fontSize: '4rem',
            fontWeight: 'bolder'
        },
        "& .section-icon": {
            display: 'inline-block',
            height: '60px',
            position: 'absolute',
            right: '102%',
            top: '50%',
            transform: 'translate(0, -50%)',
        }
    },
    gallery__mainContainer_gallery: {
        height: 'max-content',
        width: '100%',

        "& div": {
            textAlign: 'center'
        }
    },
    gallery__item: {
        height: '220px', 
        width: '180px', 
        margin: 'auto', 
        // background: 'linear-gradient(0deg, rgba(150,150,150,.7), rgba(100,100,100,.3))',
        "&:hover img": {
            transform: 'scale(1.1)'
        },
        "& img": {

            height: '100%',
            boxShadow: '0 3px 10px  #666',
            transition: 'all .2s linear',
            cursor: 'pointer'
        }
    },
    gallery__contact_item: {
        width: '100px', 
        height: '100px',
        // background: 'linear-gradient(0deg, rgba(150,150,150,.7), rgba(100,100,100,.3))',
        textAlign: 'center',
        position: 'relative',
        transition: 'all .2s ease',
        
        // "&:hover": {
        // transform: 'scale(1.2)'
        // },
        "& svg": {
            color: 'var(--goldenColor2)',
            fontSize: '6rem',
            transition: 'all .2s ease',
            // cursor: 'pointer'
        },
        // "&:hover svg": {
        //     color: 'var(--goldenColor2)',
            
        // },
        ".contact-info-holder": {
            fontWeight: 'bolder',
            position: 'absolute',
            width: '200px',
            top: '100%',
            left: '50%',
            
            transform: 'translate(-50%,0)',
            "& h4": {
                color: 'var(--goldenColor2)',
                fontSize: '1.3rem',
            },
            "& h5": {
                fontWeight: 'bolder',
                fontSize: '2rem',
                fontFamily: 'Saira, Roboto',
            }
        }
    }
}

export default galleryStyles