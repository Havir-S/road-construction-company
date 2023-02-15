import {images} from '../../constants'


// RGB(9, 10, 26)
// RGB(6, 8, 14)
// RGB(38,38,38)
// RGB(156,148,16)


const workProcessStyles = {
    workProcess__background: {
        background: 'var(--darkColor1)',
        background: `url(${images.p19})`,
        backgroundPosition: '80% -45%',
        backgroundSize: '400px',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0 40px'
    },
    workProcess__mainContainer: {
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
        "& h3": {
            fontFamily: 'Saira, Roboto',
            mt: '30px',
            fontSize: '2.5rem'
        }
    },
    workProcess__mainContainer_dots: {
        
        padding: '5px',
        margin: '15px auto',
        width: '100px',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        "& div": {
            borderRadius: '50%',
            background: 'var(--goldenColor2)',
            width: '13px',
            height: '13px'
        }
    },
    workProcess__workContainer: {
        // border: '1px solid red',
        height: 'max-content',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        "& .workProcess-item": {
            height: '100%',
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            "& .workprocess-subtext": {
                mt: '70px',
                fontStyle: 'italic',
                fontSize: '.9rem'
            },
            "&:hover p": {
                color: 'var(--goldenColor22)',
                transition: 'all .15s ease',
                transform: 'scale(1.1)'
            },
            "&:hover .timeline": {
                transition: 'all .15s linear',
                "&::after": {
                    boxShadow: '0 0 30px 3px var(--goldenColor), 0 0 50px 7px var(--goldenColor2), 0 0 70px 15px var(--goldenColor22) ',
                    border: '3px solid var(--goldenColor2)',
                    transition: 'all .15s linear',
                    width:'30px',
                    height:'30px',
                },
            },
            "& .timeline": {
                border: '3px solid var(--goldenColor22)',
                width: '100%',
                position: 'relative',
                background: 'linear-gradient(90deg, red 85%, blue 99%) ',

                "&::after": {
                    content: "''",
                    position: 'absolute',
                    width:'20px',
                    height:'20px',
                    border: '6px solid var(--goldenColor2)',
                    background: 'var(--goldenColor22)',
                    boxShadow: '0 0 30px 3px var(--goldenColor), 0 0 50px 7px var(--goldenColor2), 0 0 70px 15px rgba(0,0,0,.3) ',
                    transition: 'all .15s ease',
                    borderRadius: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                }
            },
            "& p": {
                transition: 'all .15s ease',
            },
        }
    },
    workProcess__workContainer_textContainer: {
        // border: '1px solid orange',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& p": {
            mb: '5px',
            textAlign: 'center',
            verticalAlign: 'middle',
            width: '100%',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        }
    },
}

export default workProcessStyles;