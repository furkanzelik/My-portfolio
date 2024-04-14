import React from "react";
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form>
                <div className='name-container'>
                    <input type="text" name='firstname' placeholder='Your First Name...'/>
                    <input type="text" name='lasttname' placeholder='Your Last Name...'/>
                </div>
                <input type="text" name='emai' placeholder='Enter your Email'/>
                <textarea type='text' name='message' placeholder='Message' rows={3}/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm