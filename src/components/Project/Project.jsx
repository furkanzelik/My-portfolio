import React, {useRef} from "react";
import './Project.css'
import {PROJECTS} from "../../utils/data.js";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import Slider from 'react-slick'

const Project = () => {

    const sliderRef = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows: false,
        responsive: [
            {
                breakpoints: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='experience-container' >
            <h5>Projects</h5>
            <div className='experience-content'>
                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default Project