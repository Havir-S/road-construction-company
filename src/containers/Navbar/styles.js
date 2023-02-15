import {images} from '../../constants'

const navbarStyles = {
    appBar: {
        background: 'transparent',
        padding: '15px 35px',
        mt: '10px',
        top: '0', 
        left: '0',
        boxShadow: '0',
        // border: '1px solid red',
        position: 'absolute',
        "& .navBar-sticky .img-holder img": {
            height: '60px'
        }
    },
    cautionPaper: {
        position: 'absolute',
        display: 'none',
        zIndex: 20,
        height: '20px',
      width: '100%',
        top: '100%',

        left: 0,
        boxShadow: '0 6px 3px 5px rgba(0,0,0,0.4)',
        background: `url(${images.cautionPaper2})`,
        backgroundRepeat: 'repeat no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '200px',
    },
    links: {
        fontSize: '1.2rem',
        display: {xs: 'none',md: 'inline-block'},
    },
    a_link: {
        textDecoration: 'none',
        color: '#fff',
        margin: {md: '0 5px',lg: '0 10px'},
        borderBottom: '4px solid transparent',
        transition: 'all 0.25s linear',
        position: 'relative',
        "&:hover": {
        color: 'var(--goldenColor)'
        },
        "&::before": {
            content: "''",
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'rgb(255, 252, 194)',
            position: 'absolute',
            left: 0,
            bottom: '-4px', /* this is to match where the border is */
            transformOrigin: 'left', 
            transform: 'scale(0)',
            transition: '0.25s linear',
        },
        "&:hover::before": {
            transform: 'scale(1)',
            backgroundColor: 'var(--goldenColor)',
        },
        
    },
    flagBox: {
        display: 'inline-block',
        verticalAlign: 'middle',
        background: 'var(--backgroundColor)',
        borderRadius: '5px',
        p: '10px'
    },
    modeBox: {
        display: 'inline-block',
    },
    hamburgerMenu: {
        border: '1px solid red',
        background: 'red',
        position: 'block',
        display: 'block',
        top: '0',
        left: '0',
        width: '300px',
        height: '400px',
        
        zIndex: 30
    }
}

export default navbarStyles