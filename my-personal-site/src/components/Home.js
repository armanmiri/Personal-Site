import React, { useState, useEffect } from 'react';
import '../App.css';

const Home = () => {

    const [faze, setFaze] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = window.innerHeight * 0.6;
        let newFaze = Math.max(0, 1 - scrollPosition / maxScroll);

        if (scrollPosition > maxScroll) {
          newFaze = 0;
        }

        setFaze(newFaze);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
      <div className="home-background" style={{ backgroundImage: `url('/homeImage.jpg')` }}>
        <div className="content">
          <h1 style={{ opacity: faze }}>Welcome to My Personal Website</h1>
          <h1 style={{ opacity: faze }}>Arman Miri</h1>
          <p> ... </p>
        </div>
      </div>
    );
}

export default Home;
