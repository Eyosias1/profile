import React from 'react';
import '../styles/Home.css'
import profile from '../assets/profile1.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home-section'>
      <div className='img-container'>
          <img src={profile} alt="profile Logo" className="profile-img" />
      </div>
      <div className='Intro-home'>
        <h1>Software designer, founder, and amateur astronaut.</h1>
        <p>
          I’m Spencer, a software designer and entrepreneur based in New York City.
          I’m the founder and CEO of Planetaria,
          where we develop technologies that empower
          regular people to explore space on their own terms.
        </p>
        <div className='social-icons'>
          <a href='#hoem'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
