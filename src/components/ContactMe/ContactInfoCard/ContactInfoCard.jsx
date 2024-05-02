import React from "react";
import './ContactInfoCard.css'

const ContactInfoCard = ({ contactIcon, text, link }) => {
    return (
        <div className='contact-details-card'>
            <div className='icon' >
                <a href={link} target='_blank' rel='noreferrer' >
                <img src={contactIcon} alt={text}  />
                </a>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ContactInfoCard