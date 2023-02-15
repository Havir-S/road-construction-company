import {images} from '../../constants'

const historyStyles = {
    history__mainBackground: {

        mt: '50px',
        
        // background: `url(${images.p39})`,
        // background: `url(${images.pattern9})`,
        // background: `url(${images.pattern8})`,
        // background: `url(${images.pattern13})`,
        // background: `url(${images.p4})`,
        // background: `url(${images.p21})`,
        background: `url(${images.p42}), url(${images.p4})`,
        backgroundBlendMode: 'default',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center'
    },
    history__contactTitle: {
        "& .MuiTypography-h2": {
            color: 'white',
            fontSize: '2.7rem',
            // pb: '15px',

            position: 'relative',
            width: 'max-content',
            margin: '20px auto',
            "&::after": {
                position: 'absolute',
                borderBottom: '10px solid var(--goldenColor2)',
                width: '80%',
                top: '120%',
                left: '50%',
                transform: 'translate(-50%,0)',
                content: "''",
            }
        },
    },
    history__mainHolder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "& .timeline-item:first-of-type": {
            mt: '30px',
            position: 'relative',
            "&:after": {
                content: "''",
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(0deg, transparent 85%, rgba(6, 8, 14, .7) 90%, rgba(6, 8, 14, 1) 99%) '
            }
            
        },
        "& .timeline-item:last-of-type": {
            position: 'relative',
            "&:after": {
                content: "''",
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, transparent 85%, rgba(6, 8, 14, .7) 90%, rgba(6, 8, 14, 1) 99%) '
            }
        },
        "& .timeline-item": {
            padding: ' 0 20px',
            position: 'relative'
        },
        "& .timeline": {
            border: '3px solid var(--goldenColor2)',
            margin: 'auto',
            height: '400px',
            position: 'relative',
            "&:after": {
                content: "''",
                position: 'absolute',
                width: '25px',
                height: '25px',
                background: 'var(--backgroundColor)',
                borderRadius: '50%',
                border: '4px solid var(--goldenColor2)',
                left: '0%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            },
            
        },
        "& .timeline-item:nth-child(odd)": {
            "&:before": {
                content: "''",
                position: 'absolute',
                width: '15px',
                height: '15px',
                background: 'var(--goldenColor2)',
                borderTop: '4px solid var(--goldenColor2)',
                borderRight: '4px solid var(--goldenColor2)',
                right: '24px',
                top: '50%',
                transform: 'translate(0, -50%) rotate(45deg)'

            },
            "& .historyCard": {
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
                right: '80px',
                zIndex: '2',
            }
            

        },
        "& .timeline-item:nth-child(even)": {
            "&:before": {
                content: "''",
                position: 'absolute',
                width: '15px',
                height: '15px',
                background: 'var(--goldenColor2)',
                borderTop: '4px solid var(--goldenColor2)',
                borderRight: '4px solid var(--goldenColor2)',
                left: '24px',
                top: '50%',
                transform: 'translate(0, -50%) rotate(45deg)'

            },
            "& .historyCard": {
                position: 'absolute',
                top: '50%',
                transform: 'translate(0, -50%)',
                left: '80px'
            }
            

        },
    }   
}

export default historyStyles