import react from 'react'
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import gmail from '../../../src/assets/images/gmail.png';
import githubLogo from '../../../src/assets/images/github.png';

const ContactMe = () => {
    return(
        <section className='contact-container'>
           <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{flex: 1}}>
                <ContactInfoCard
                    contactIcon={gmail} // email icon
                text='furkanzelik@gmail.com'
                />
                <ContactInfoCard
                    contactIcon={githubLogo} // github icon
                    text='furkanzelik'
                    link='https://github.com/furkanzelik'
                />
                </div>
                <ContactForm
                />
                <div style={{flex: 1}}></div>
            </div>
        </section>
    )
}

export default ContactMe