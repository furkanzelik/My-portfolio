import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Email sent successfully!');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div className='contact-form-content'>
            <form onSubmit={handleSubmit}>
                <div className='name-container'>
                    <input type="text" name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Your First Name...' required/>
                    <input type="text" name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Your Last Name...' required/>
                </div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter your Email' required/>
                <textarea type='text' name='message' value={formData.message} onChange={handleChange} placeholder='Message' rows={3} required/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;