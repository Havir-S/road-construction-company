import {images} from '../../constants'

const referendumStyles = {
    referendum__mainContainer_section: {
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
    referendum__mainContainer_gallery: {
        height: 'max-content',
        width: '100%',

        "& div": {
            textAlign: 'center'
        }
    },
    referendum__item: {
        height: '150px', 
        width: '230px', 
        margin: 'auto', 
        background: 'linear-gradient(0deg, rgba(150,150,150,.7), rgba(100,100,100,.3))',
        "&:hover img": {
            transform: 'scale(1.1)'
        },
        "& img": {
            border: '1px solid red',
            height: '100%',
            boxShadow: '0 3px 10px  #666',
            transition: 'all .2s linear',
            cursor: 'pointer'
        }
    }
}

export default referendumStyles