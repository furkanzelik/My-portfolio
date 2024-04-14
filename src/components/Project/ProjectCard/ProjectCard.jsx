import React, {useRef} from "react";
import './ProjectCard.css'


const ProjectCard = ({ details }) => {
    return (
        <div className="work-experience-card">
            <h6>{details.title}</h6>
            <div className="work-duration">{details.date}</div>
            <ul>
                {details.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <img className='project-img' src={details.img} alt="project images" />
        </div>
    );
};

export default ProjectCard