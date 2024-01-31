import React from "react";
import myself from '../assets/images/pixeled_me.jpg'

function Navbar() {


    return(
        <div className='bg-stone-200 rounded-lg shadow-lg fixed'>
           <img src={myself} className='w-[300px] rounded-full mb-14 ml-14' />
            <h1 className='text-5xl ml-14' >
                Furkan Ozcelik
                <p className='text-xl mb-14' >IT STUDENT AT UNIVERSITY ROTTERDAM</p>
            </h1>
            <ul className='ml-14'>
                <li className='mb-4' >Home</li>
                <li className='mb-4' >About</li>
                <li className='mb-4' >Skills</li>
                <li className='mb-4' >Education</li>
                <li className='mb-4' >Contact</li>
            </ul>
        </div>
    )

}

export default Navbar