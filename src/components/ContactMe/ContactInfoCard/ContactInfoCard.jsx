import React from "react";
import './ContactInfoCard.css'

const ContactInfoCard = ({ contactIcon, text }) => {
    return (
        <div className='contact-details-card'>
            <div className='icon' >
                <img src={contactIcon} alt={text}  />
            </div>

            <p>{text}</p>
        </div>
    );
};

export default ContactInfoCard