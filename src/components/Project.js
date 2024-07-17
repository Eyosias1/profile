import React from 'react';
import '../styles/Project.css'
import profile from '../assets/profile1.jpg';
import cid from '../assets/cid.jpg';
import travel from '../assets/Travelit.svg';
import car from '../assets/Car 64.png';


function Project() {
return (
<div className='Project'>
    <h2>Featured Projects</h2>
    <ul>
        <li>
            <div className='proj-li'>
                <div className='cal'>
                    <span className='bar'></span>
                    <span className='date'> Mai 9, 2024</span>
                </div>
                <div className='project-icon'>
                    <img src={cid} alt="profile Logo" className="profile-img" />
                </div>
                <h3>Calcule tes indémnités</h3>
                <p>
                    Calcule tes indémnités is the web app to ensuire you are being payed all your indemnites as a french
                    worker.
                </p>
                <div className='link-proj-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    <a href='https://cid-zfx1.onrender.com/'> CID.com</a>
                </div>
            </div>
        </li>
        <li>
            <div className='proj-li'>
                <div className='cal'>
                    <span className='bar'></span>
                    <span className='date'> July 14, 2023</span>
                </div>
                <div className='project-icon'>
                    <img src={travel} alt="profile Logo" className="profile-img" />
                </div>
                <h3>Travel-It</h3>
                <p>
                    Travel-It is the authentique tourisme app designed for young travelers seeking thrilling experiences
                    and memorable journeys.
                </p>
                <div className='link-proj-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    <a href='https://travel-it.onrender.com/'> Travel-it.com</a>
                </div>
            </div>
        </li>
        <li>
            <div className='proj-li'>
                <div className='cal'>
                    <span className='bar'></span>
                    <span className='date'> August 6, 2023</span>
                </div>
                <div className='project-icon'>
                    <img src={car} alt="profile Logo" className="profile-img" />
                </div>
                <h3>Car-Rental</h3>
                <p>
                    Car-Rental is the premier web app designed to make car rentals and reservations a breeze.
                </p>
                <div className='link-proj-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                            d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    <a href='https://github.com/Eyosias1/car-rental-challenge'> car-rental.github</a>
                </div>
            </div>
        </li>
    </ul>
</div>
);
}

export default Project;
