import {images} from '../../constants'
const contactStyles = {
    contact__boxBreak: {
    // background: `url(${images.img9})`,
    background: `url(${images.img9})`,
    backgroundSize: 'cover',
    // backgroundSize: '300px',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    boxShadow: '0 10px 15px rgba(0,0,0,.6), 0 -10px 15px rgba(0,0,0,.6)',
    margin: '0 0 60px',
    height: '300px',
    width: '100%'
    },
    contact__background: {
        // background: `url(${images.aboutUs1})`,
        // backgroundSize: 'cover',
        // backgroundSize: '2000px 800px',
        // backgroundPosition: 'center center',
        background: 'linear-gradient(0deg, transparent 95%, rgb(0,0,0))',
        // backgroundAttachment: 'fixed'
        pt: '50px',
        position: 'relative',
        mt: '-5px',
        zIndex: '2'
    },
    contact__title: {
        "& .MuiTypography-h2": {
            color: 'white',
            fontSize: '2.7rem',
            // pb: '15px',
            // borderBottom: '2px solid var(--goldenColor2)',
            position: 'relative',
            width: 'max-content',
            margin: '20px auto',
            "&::after": {
                position: 'absolute',
                borderBottom: '10px solid var(--goldenColor2)',
                width: '200px',
                top: '120%',
                left: '50%',
                transform: 'translate(-50%,0)',
                content: "''",
            }
        },
    },
    contact__messageContainer: {
        // color: 'var(--goldenColor2)',
        padding: '20px',
        width: '700px',
        border: '2px solid var(--goldenColor2)',
        borderRadius: '5px',
        margin: 'auto'
    },
    contact__secondRow: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'relative',
        mt: '100px',
        mb: '140px',

    },
    contact__googleMapsBox: {
        width: 'max-content',
        position: 'relative',
        display: 'inline-block',
        textAlign:'center',
        
        "& p": {
            position: 'relative',
            color: 'var(--goldenColor2)',
            borderRadius: '5px',
            boxShadow: '0 10px 5px rgba(0,0,0,.8)',
            fontWeight: 'bold',
            padding: '10px 5px',
            margin: '3px 0',
            width: '300px',
            fontSize: '1.8rem',
            border: '2px solid var(--goldenColor2)',
        },
        "& p:last-of-type": {
            mb:'10px',
            boxShadow: '0 10px 5px rgba(0,0,0,.5)',
        },
        "& img": {
            border: '3px solid var(--goldenColor2)',
            borderRadius: '5px',
            padding: '20px',
            height:'max-content',
            zIndex: 5,
            backgroundColor: 'var(--backgroundColor)',
            boxShadow: '0 10px 5px rgba(0,0,0,.8)',
        },
        "&::before": { 
            content: "''",
            border: '3px solid var(--goldenColor2)',
            borderRadius: '2px',
            position: 'absolute',
            width: '45px',
            top: '81%',
            left: '10%',
            height: '200px',
            zIndex: -1
        },
        "&::after": { 
            content: "''",
            border: '3px solid var(--goldenColor2)',
            borderRadius: '2px',
            position: 'absolute',
            width: '45px',
            top: '81%',
            right: '10%',
            height: '200px',
            zIndex: -1
        },
    },
    contact__writeToUsBox: {
        position: 'relative',
        display: 'inline-block',
        "& input": {
            background: 'transparent',
            outline: 'none',
            color: 'var(--goldenColor2)',
            margin: '5px',
            borderRadius: '5px',
            boxShadow: '0 10px 5px rgba(0,0,0,.8)',
            fontWeight: 'bold',
            padding: '20px',
            pl: '15px',
            width: '400px',
            fontSize: '2rem',
            display: 'block',
            border: '2px solid var(--goldenColor2)',

            boxSizing:' border-box'

        },
        

    },
    contact__writeToUsBoxFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // "& input[type='submit']": {
        //     width: '150px',
        //     height: '150px',
        //     background: `url(${images.d3a})`,
        //     backgroundSize: '150px',
        //     backgroundRepeat: 'no-repeat',
        //     "&::after": {
        //         content: "'aaaa'"
        //     }
        // }
        "& input[type='submit']": {
            width: '240px'
        },
        "& input.notFinished": {
            color: '#555'
        }
    },
    contact__writeToUsBox_left: {

    },
    contact__writeToUsBox_textAreaHolder: {
        width: 'max-content',
        position: 'relative',
        background: 'var(--backgroundColor)',
        mb: '8px',
        
        "&::before": { 
            content: "'aaaa'",
            border: '3px solid var(--goldenColor2)',
            borderRadius: '2px',
            position: 'absolute',
            width: '45px',
            top: '60%',
            left: '10%',
            height: '200px',
            zIndex: -1
        },
        "&::after": { 
            content: "''",
            border: '3px solid var(--goldenColor2)',
            borderRadius: '2px',
            position: 'absolute',
            width: '45px',
            top: '60%',
            right: '10%',
            height: '200px',
            zIndex: -1
        },
        "& textarea": {
            background: 'transparent',
            position: 'relative',
            outline: 'none',
            color: 'var(--goldenColor2)',
            margin: '5px',
            borderRadius: '5px',
            boxShadow: '0 10px 5px rgba(0,0,0,.8)',
            fontWeight: 'bold',
            padding: '20px',
            pl: '15px',
            width: '650px',
            fontSize: '2rem',
            display: 'block',
            border: '2px solid var(--goldenColor2)',
            height: '250px',
            resize: 'none',

        },
    },
    contact__writeToUsBox_arrowText: {
        width: '100px',
        height: '100px',
        position: 'absolute',
        bottom: '52%',
        left: '90%',
        transform: 'translate(0, -50%)',
        animation: 'float 4s linear infinite',
        "& .arrowPointer": {
            position: 'absolute',
            // border: '1px solid green',
            width: '100px',
            height: '100px',
            top: '0',
            background: `url(${images.pattern14})`,
            backgroundSize: '300px 300px',
            transform: 'rotate(-60deg)',
            backgroundPosition: 'center',
        },
        "& p": {
            color: 'white',
            position: 'absolute',
            // border: '1px solid blue',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            fontWeight: 'bold',
            left: '-80%',
            bottom: '85%',
            width: 'max-content'
        }
    },
    contact__break: {
        height: '80px',
        background: '#111',
        boxShadow: '0 -5px 10px rgb(0,0,0), 0 5px 10px rgb(0,0,0)'
    }

}

export default contactStyles