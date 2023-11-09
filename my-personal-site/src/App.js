// Importing necessary modules and components
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Main App component
const App = () => {

  // State to keep track of the active section in view
  const [activeSection, setActiveSection] = useState('home');
  // State to manage the visibility of the profile section
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to handle scroll event and update the active section
  const handleScroll = () => {
    // List of sections to track
    const sections = ['about', 'portfolio', 'resume'];
    
    // Calculate the middle of the screen
    const scrollY = window.scrollY + window.innerHeight / 2;
    
    // Determine the current section based on scroll position
    const currentSection = sections.reverse().find(section => {
      const element = document.getElementById(section);
      return element.offsetTop <= scrollY;
    });

    // Update the active section state
    setActiveSection(currentSection || 'about');
  };

  // Function to scroll to a specific element by ID
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to toggle the visibility of the profile section
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Effect hook to add and remove scroll event listener
  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rendering the app layout with navigation and sections
  return (
    <div className="App">
      <nav>
        {/* Icon button to toggle the profile/contact section */}
        <a onClick={toggleProfile} className="profile-symbol">
          <FontAwesomeIcon icon={faBars}/>
        </a>
        {/* Navigation links that scroll to respective sections */}
        {/* They become 'active' when their section is in view */}
        <a onClick={() => scrollToElement('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</a>
        <a onClick={() => scrollToElement('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
        <a onClick={() => scrollToElement('resume')} className={activeSection === 'resume' ? 'active' : ''}>Education</a>
        
      </nav>

      {/* Profile/contact section that slides in */}
      <div className="contact-card">
        <div className={`profile-slide ${isProfileOpen ? 'open' : ''}`}>
          <Contact />
        </div>
      </div>
      
      {/* Main content sections */}
      <div id="about"><AboutMe /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="resume"><Resume /></div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
