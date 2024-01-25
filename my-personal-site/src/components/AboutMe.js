import React from 'react';
import '../App.css';
import Contact from './Contact';

const AboutMe = () => {
    return (
        <div className="about-container">
            <div className="profile-section">
                <div className="contact-mobile-hidden">
                    <Contact />
                </div>
            </div>
            <div className="info-section">
                <div className="bio-section">
                    <h1 className="section-title">Arman Miri</h1>
                    <p className="bio">
                        Hi, I'm currently pursuing my B.S. in Computer Science at Santa Clara University. My academic journey has instilled in me a deep understanding and focus on artificial intelligence (AI), which I have ardently pursued throughout my time here. Apart from my specialized interest in AI, my education has equipped me with essential software engineering skills, enabling me to handle diverse tech challenges. I've dedicated time to hone my problem-solving abilities and have developed a comprehensive and analytical approach to my projects.
                    </p>
                    <p className="bio">
                        I'm a staunch advocate for continuous learning, always seeking to refine and update my capabilities. The dynamic nature of the tech landscape drives my enthusiasm to stay in tune with the latest advancements and breakthroughs. I view every challenge as a learning experience and every task as a chance to deliver impactful digital results. As I embark on my professional journey, my goal is to be a part of initiatives that fuse cutting-edge technology with tangible benefits for individuals and societies. The intersection of technology, innovation, and problem-solving excites me, and I eagerly anticipate the adventures that lie ahead.
                    </p>

                </div>
                <div className="skills-section">
                    <h1 className="section-title">Skills</h1>
                    <ul className="skills-list">
                        <li>Swift</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                        <li>Linux</li>
                        <li>CSS</li>
                        <li>AWS</li>
                        <li>HTML</li>
                        <li>C</li>
                        <li>node.js</li>
                        <li>Pandas</li>
                        <li>SQL</li>
                        <li>Qt</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
