import React from 'react';
import './Home.css'; // Assuming you have a CSS file named Home1.css for styling
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
export const Home1 = () => {
  return (
    <div>
      <header>
        <div className="container" >
         <img src={logo} align="center"></img>
          
        </div>
      </header>
      <br></br>
      <section className="hero">
        <div className="container2">
          <h2>Track Your Bus in Real-Time</h2>
          <br></br>
          <p>Never miss your bus again. With Safe Track, you can monitor the location of your bus in real-time, ensuring you arrive at your destination on time, every time.</p>
          <br></br>
          <a href="#" className="btn">
          <NavLink to="/signup">Get Started</NavLink></a>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2024 Safe Track. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
