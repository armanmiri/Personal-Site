import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Contact = () => {
    return (
        <div className='contact-component'>
            <div className="image-container">
                <img src="/profile.jpeg" alt="Profile" className="profile-image" />
            </div>
            <div className="contact-container">
                <h2 className='section-title'>Contact Me</h2>
                <div className="contact-icons">
                    <div className="icon-item email-icon-item">
                        <FontAwesomeIcon icon={faEnvelope} size="4x" className="icon email" />
                        <p>asmiri03@gmail.com</p>
                    </div>
                    <a href="https://github.com/armanmiri" target="_blank" rel="noopener noreferrer" className="icon-item">
                        <FontAwesomeIcon icon={faGithub} size="4x" className="icon github" />
                        <p>GitHub</p>
                    </a>
                    <a href="https://www.linkedin.com/in/arman-miri-a018882a0/" target="_blank" rel="noopener noreferrer" className="icon-item">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon linkedin" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
            <div className="resume-download-container">
                <div className="resume-icon">
                    <a href="/Arman%20Miri%20Resume%202023.pdf" download target="_blank" rel="noopener noreferrer" className="icon-item">
                        <FontAwesomeIcon icon={faDownload} size="4x" className="icon download" />
                        <p>Download CV</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
