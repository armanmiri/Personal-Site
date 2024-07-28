import React from 'react';
import '../App.css';
import experiences from './Experience';

const Resume = () => {

    return (
        <div className="experience-container">
            <br />
            <h1 className="page-title" >Education</h1>
            {experiences.map((exp, index) => (
                <div className="experience" key={index}>
                    <div className="experience-header">
                        <img src={exp.logo} alt={exp.company} className="company-logo" />
                        <div className="experience-info">
                            <h2>{exp.company}</h2>
                            <p>{exp.location} ({exp.duration})</p>
                            <p><strong>{exp.role}</strong></p>
                        </div>
                    </div>
                    <ul className="experience-tasks">
                        {exp.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Resume;
