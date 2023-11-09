import React from 'react';
import '../App.css';
import projects from './projectsData';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <br />
            <h1 className="page-title" >My Portfolio</h1>
            <br />
            <div className="projects">
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-link">
                        <div className="project">
                            <h2>{project.title}</h2>
                            <div className="project-box">
                            </div>
                            <ul>
                                {project.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}

export default Portfolio;
