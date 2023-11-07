import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function ProjectItem (props) {


    return (
        <div className='projectItem'>
            <div className="projectItem__imageBox">
                <img src={props.image} alt="Project" className="projectItem__imageBox_image" />
                <div className="projectItem__imageBox_projectDetails">
                    <h2 className="projectItem__imageBox_projectDetails-title">Description</h2>
                    <p className="projectItem__imageBox_projectDetails-text">{props.description}</p>
                    <p className="projectItem__imageBox_projectDetails-skills">Skills: <span className='projectItem__imageBox_projectDetails-skillsItems'>{props.skills}</span></p>
                    <a href={props.link} target='_blank' className="projectItem__imageBox_projectDetails-github" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="projectItem__imageBox_projectDetails-github--icon"></FontAwesomeIcon>
                        <span className="projectItem__imageBox_projectDetails-github--text">View on Github</span>
                    </a>
                </div>
            </div>
            <h2 className="projectItem__title">{props.title}</h2>
            <p className="projectItem__date">{props.date}</p>
        </div>
    );
}


export default ProjectItem;