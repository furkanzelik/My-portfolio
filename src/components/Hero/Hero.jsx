import React from "react";
import './Hero.css'

const Hero = () => {
    return(
        <section className='hero-container' >
            <div className='hero-content'>
                <h2>Create code sddfffff</h2>
                <p>Passionated developer student </p>
            </div>

            <div className='hero-img' >
                <div>
                    <div className='tech-icon' >
                        <img src='../../src/assets/react.svg'  alt='react' />
                    </div>
                    <img src="../../src/assets/images/pixeled_me.jpg" alt="myself"/>
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src="../../src/assets/images/html.png"/>
                    </div>
                    <div className='tech-icon'>
                        <img src="../../src/assets/images/javascript-1.svg"/>
                    </div>
                    <div className='tech-icon'>
                        <img src="../../src/assets/images/sql.png"/>
                    </div>
                    <div className='tech-icon '>
                        <img src="../../src/assets/images/unity.png"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero