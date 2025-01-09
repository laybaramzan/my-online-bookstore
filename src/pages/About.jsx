import React from 'react';
import './CSS/About.css';
import johnDoe from '../components/assets/person4.jpg';
import janeSmith from '../components/assets/person2.jpg';
import emilyJohnson from '../components/assets/person3.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our bookstore! We are passionate about bringing the best books to our community.</p>
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to provide a wide variety of books to inspire, educate, and entertain readers of all ages. We believe in the power of books to transform lives and foster a love of reading.</p>
      </div>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src={johnDoe} alt="John Doe" className="team-member-img" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src={janeSmith} alt="Jane Smith" className="team-member-img" />
          <h3>Jane Smith</h3>
          <p>Head of Operations</p>
        </div>
        <div className="team-member">
          <img src={emilyJohnson} alt="Emily Johnson" className="team-member-img" />
          <h3>Emily Johnson</h3>
          <p>Customer Service Manager</p>
        </div>
      </div>
    </div>
  );
}

export default About;
