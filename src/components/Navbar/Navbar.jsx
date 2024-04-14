import React from "react";
import myself from '../../assets/images/pixeled_me.jpg'
import './Navbar.css'

function Navbar() {


    return(
        <>
        <nav className='nav-wrapper' >
            <div className='nav-content' >
    <img className='logo' src='../../../public/logo.png' alt='logo'/>

                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Experience</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact Me</a>
                    </li>

                  <button className='contact-btn' onClick={() =>{}}  >
                      Hire Me
                  </button>
                </ul>
                <button className='menu-btn' onClick={() => {}} >
                    <span class={'material-symbols-outlined'} style={{ fontSize:'1.8rem'}} >
                        menu
                    </span>
                </button>
            </div>
        </nav>
        </>
    )

}

export default Navbar