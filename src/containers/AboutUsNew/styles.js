import {images} from '../../constants'

const aboutUsStyles = {
    aboutUs__backgroundMain: {
        overflow: 'hidden',
        height: 'max-content',
        background: `url(${images.p10})`,
        backgroundSize:'1000px',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
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
    aboutUs__mainContainer: {
        
        maxWidth: '1700px',
        margin: '100px auto 0',
        position: 'relative',
        display: 'flex',
        
        flexDirection: 'row',
        "& div": {

            color: 'white',
            // textAlign: 'center'

        }
    },
    aboutUs__mainContainer_containerLeft: {
        flex: '3',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
        "& p": {
            fontFamily: 'Saira, Roboto, sans-serif',
        }
    },
    aboutUs__mainContainer_containerLeft_holder: {
        width: 'max-content',
        margin: 'auto',
        "& .cautionPaper-small": {
            mt: '20px',
            width: '100%',
            height: '50px',
            background: `url(${images.cautionPaper2})`,
            backgroundRepeat: 'repeat no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '200px',
        }
    },
    aboutUs__mainContainer_titleHolder: {
        display: 'flex',
        alignItems: 'center',
        width: '620px',
        "& img": {
            width: '130px',
        },
        "& p": {
            ml: '20px',
            fontSize: '4.5rem',
            fontWeight: 'bolder'
        },
    },
    aboutUs__mainContainer_subTitle: {
        width: '700px',
        "& p": {
            margin: '30px 10px',
            fontSize: '24px'
        }
    },
    aboutUs__mainContainer_section: {
        position: 'relative',
        "& p": {
            fontSize: '4rem',
            fontWeight: 'bolder'
        },
        "& .section-icon": {
            height: '60px',
            position: 'absolute',
            display: 'inline-block',
            right: '102%',
            top: '50%',
            transform: 'translate(0, -50%)',
        }
    },
    aboutUs__mainContainer_gallery: {
        height: 'max-content',
        width: '100%',

        "& div": {
            textAlign: 'center'
        }
    },
    aboutUs__mainContainer_callToAction: {
        mt: '80px',
        "& p": {
            color: 'white',
            fontWeight: '900',
            fontSize: '5rem',
            textAlign: 'center',
            fontFamily: 'Saira, Roboto, sans-serif',
        }
    },
    aboutUs__mainContainer_containerRight: {
        flex: '2',
        mt: '850px',
        "& img": {
            width: '100%'
        },
        "& .cautionPaper-small": {
            mt: '-28px',
            width: '100%',
            height: '50px',
            background: `url(${images.cautionPaper2})`,
            backgroundRepeat: 'repeat no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '200px',
        }
    },
    aboutUs__mainContainer_cautionPaperBig: {
        position: 'relative',
        height: '55px',
        margin: '80px 0 0',
        background: `url(${images.cautionPaper2})`,
        backgroundRepeat: 'repeat no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '400px',
        "& .caution-arrow": {
            width: '130px',
            height: '130px',
            background: `url(${images.testArrow})`,
            backgroundPosition: 'center',
            backgroundSize: '130px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
        },
    },
    aboutUs__mainContainer_break: {
        // background: `url(${images.img9})`,
        background: `url(${images.img11b})`,
        backgroundSize: 'cover',
        // backgroundSize: '300px',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        boxShadow: '0 5px 13px 3px rgba(0,0,0,.6)',
        mb: '30px',
        height: '400px',
        width: '100%'
        },

}

export default aboutUsStyles