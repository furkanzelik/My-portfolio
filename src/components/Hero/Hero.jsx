import React from "react";
import './Hero.css'
import pixeledme from '../../../src/assets/images/pixeled_me.jpg'
import iconReact from '../../../src/assets/react.svg';
import iconHTML from '../../../src/assets/images/html.png';
import iconJS from '../../../src/assets/images/javascript-1.svg';
import iconSQL from '../../../src/assets/images/sql.png';
import iconUnity from '../../../src/assets/images/unity.png';

const Hero = () => {
    return(
        <section className='hero-container' >
            <div className='hero-content'>
                <h2>"Create magic, code adventures."</h2>
                <p>Passionated creative developer student </p>
            </div>

            <div className='hero-img'>
                <div >

                    <img src={pixeledme} alt="myself"/>
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src={iconReact} alt='react'/>
                    </div>
                    <div className='tech-icon'>
                        <img src={iconHTML}/>
                    </div>
                    <div className='tech-icon'>
                        <img src={iconJS}/>
                    </div>
                    <div className='tech-icon'>
                        <img src={iconSQL}/>
                    </div>
                    <div className='tech-icon '>
                        <img src={iconUnity}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero