import {images} from '../../constants'


// RGB(9, 10, 26)
// RGB(6, 8, 14)
// RGB(38,38,38)
// RGB(156,148,16)


const questionsStyles = {
    questions__background: {
        background: `url(${images.p10})`,
        backgroundSize: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            
        },
        zIndex: 5,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
    },
    questions__mainContainer: {
        pt: '70px',
        textAlign: 'center',
        "& .MuiTypography-h2": {
            color: 'white',
            fontSize: {
                xs: '1.4rem',
                sm: '2rem',
                md: '2.7rem'
            },
            // pb: '15px',
            // borderBottom: '2px solid var(--goldenColor2)',
            position: 'relative',
            width: 'max-content',
            margin: '20px auto',
            textShadow: {
                sm: '0 0 5px black, 0 0 5px black',
                md: '0'
            },
            "&::after": {
                position: 'absolute',
                borderBottom: '10px solid var(--goldenColor2)',
                width: '25%',
                top: '150%',
                left: '50%',
                transform: 'translate(-50%,0)',
                content: "''",
            }
        },
        "& .MuiTypography-h4": {
            color: 'white',
            fontSize: '1rem',
            // pb: '15px',
            // borderBottom: '2px solid var(--goldenColor2)',
            position: 'relative',
            width: 'max-content',
            margin: '20px auto',
        },
    },
    questions__mainContainer_questionBox: {
        // border: '1px solid var(--goldenColor2)',
        borderRadius: '6px',
        margin: '120px auto',
        
        maxWidth: '1400px'
    },
    questions__mainContainer_questionBox_hold: {
        maxWidth: '1000px',
        margin: 'auto',
        
    },
}

export default questionsStyles;