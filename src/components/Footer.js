import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Welcome to Rizal Village
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>About Us</h3>
            <Link to='/about'>Home Owners Officers</Link>
            <Link to='/about'>About Rizal Village</Link>
            <Link to='/about'>Direction</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Contact Us</h3>
            <Link to='/about'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
        </div>
  );
}

export default Footer;
