import React, {useEffect, useState, useContext} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Modal } from 'react-responsive-modal';
import {ChosenServiceContext} from '../../App.js'
const axios = require('axios').default;

const WriteToUs = () => {

    const chosenService = useContext(ChosenServiceContext)

    const [open, setOpen] = useState(false);  
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [messageBody, setMessageBody] = useState({
        workType: '',
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        
    })
    //Checker if all fields are properly filled, if true, arrows lights up
    const [sendReady, setSendReady] = useState(false)

    
    // default value change
    const handleChange = (e) => {
        setMessageBody(prevState => {return { ...prevState, [e.name]: e.value }})
    }

    // phoneInput is an outside component and sometimes results in a undefined value therefore it has its value change
    const handlePhone = (phonVal) => {
        if (phonVal === undefined) {
            setMessageBody(prevState => {return { ...prevState, phoneNumber: '0' }}) 
        } else {
            setMessageBody(prevState => {return { ...prevState, phoneNumber: phonVal }})
        }
        
    }

    // if all is checked and ready, you can click the arrow and send the message to the server
    async function handleSubmit() {
        if (sendReady) {
            onOpenModal();

            const interval = setInterval(() => {
                onCloseModal();
                clearInterval(interval)
            }, 3000);


            axios({
                method: 'post',
                url: 'http://localhost:3001/',
                data: messageBody
            }).then(response => console.log(response))

        } else {

        }
        
        setSendReady(false)
    }

    const checkMessageBody = () => {
        // small validation test
        const checkPassed = Object.entries(messageBody).every(([item, itemVal], i) => {
            
            if(item === 'workType') {
                return true
            }
            else if (item === 'message' && itemVal.length >= 5 && itemVal.length <= 600) {
                return true
            } else if (item !== 'message' && itemVal.length > 0 && itemVal.length <= 100) {
                return true
            }

            setSendReady(false)

        })
        if (checkPassed) { setSendReady(true) }
    }

    // CHECK IF READY TO SEND
    useEffect(() => {
        checkMessageBody();
    }, [messageBody])

  return (
    <div className='contact__writeToUsBox contactZnak1'>
    <Modal open={open} onClose={onCloseModal} center>
            <div className='contact__messageSent'>
                <h2>Wiadomość została dostarczona.</h2>
                <h3>Dziękujemy!</h3>
            </div>
      </Modal>
                    <div className='contact__writeToUsBoxFlex'>
                        <div >
                            <input type="text" maxLength="100"  name='workType' value={chosenService.chosenService} disabled onChange={(e) => handleChange(e.target)} placeholder='Wybrany typ usługi...' />
                            <input type="text" maxLength="100"  name='name' required onChange={(e) => handleChange(e.target)} value={messageBody.name} placeholder='Firma/Pan/Pani...' />
                            <input type="email" maxLength="100" name='email' required onChange={(e) => handleChange(e.target)} value={messageBody.email} placeholder='E-mail...' />
                            {/* <input type="number" name='phoneNumber' required onChange={(e) => handleChange(e.target)} placeholder='Telefon...' /> */}
                            <PhoneInput limitMaxLength={true} addInternationalOption={false} defaultCountry='PL' countries={['PL', 'UA', 'GB', 'DE']} name='phoneNumber' placeholder="Telefon..." value={messageBody.phoneNumber} onChange={handlePhone}/>
                            
                        </div>
                        <input type='submit' value='Wyślij... &#8680;' onClick={handleSubmit} className={sendReady ? '' : 'notFinished'} />
                        
                    </div>
                    <div className='contact__writeToUsBox_textAreaHolder'>
                        <textarea maxLength="600" required name='message'   minLength='5' onChange={(e) => handleChange(e.target)} value={messageBody.message}  placeholder='Wiadomość...' />
                        <input type='submit' value='Wyślij... &#8680;' onClick={handleSubmit} className={sendReady ? '' : 'notFinished'} />
                    </div>
                    <div className='contact__writeToUsBox_arrowText'>
                        <p>Zostaw nam wiadomość, odpiszemy!</p>
                        <div className='arrowPointer' />
                    </div>
                </div>
  )
}

export default WriteToUs