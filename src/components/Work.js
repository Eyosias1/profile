import React from "react";
import '../styles/Work.css';
import school42 from '../assets/42.png';
import lewagon from '../assets/lewagon.png';
import uca from '../assets/uca.jpg';
import kela_mela from '../assets/kelal-mela.png';

function Work() {
return (
<div className="work-about">
    <h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
        </svg>
        <span>Professional Career :</span>
    </h2>
    <ol>
        <li>
            <img src={kela_mela} alt="ecole 42 Logo" className="exp-img" />
            <div className="exp-desc">
                <div className="title">
                    <h3>Kelal Mela</h3>
                </div>
                <div className="title-desc">
                    <p>Full stack MERN developper</p>
                    <p> 2024 - Present</p>
                </div>
            </div>
        </li>
        <li>
            <img src={uca} alt="ecole 42 Logo" className="exp-img" />
            <div className="exp-desc">
                <div className="title">
                    <h3>UCA</h3>
                </div>
                <div className="title-desc">
                    <p>Computer Science BS. degree</p>
                    <p> 2020 - 2024</p>
                </div>
            </div>
        </li>
        <li>
            <img src={lewagon} alt="ecole 42 Logo" className="exp-img" />
            <div className="exp-desc">
                <div className="title">
                    <h3>Le Wagon</h3>
                </div>
                <div className="title-desc">
                    <p>Ruby on rails Bootcamp</p>
                    <p> Feb - Jul (2023)</p>
                </div>
            </div>
        </li>
        <li>
            <img src={school42} alt="ecole 42 Logo" className="exp-img" />
            <div className="exp-desc">
                <div className="title">
                    <h3>École 42 LYON</h3>
                </div>
                <div className="title-desc">
                    <p>C bootcamp</p>
                    <p> 2021 (2 months)</p>
                </div>
            </div>
        </li>
    </ol>
    <div className="cv-button">
        <a href="/cv.pdf" download="Cv-Eyosias">English CV</a>
        <a href="/cv.pdf" download="Cv-Eyosias">French CV</a>
    </div>
</div>
);
}

export default Work;
