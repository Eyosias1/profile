import React, { useState, useEffect } from "react";
import "../styles/About.css";

import profile from "../assets/profile1.jpg";
import SvgIcon from "../components/SvgIcon"; // Import the SVG component
import social_links from "../assets/data/socials_links.json";

function About() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    setLinks(social_links[0]);
  }, []);

  return (
    <div className="about-section">
      <div className="about-p">
        <h1>
          {" "}
          I'm Eyosias Woldemichael. I live in France where i develop brand new
          software.
        </h1>
        <div className="p-div">
          <p>
            Growing up was easy for me as I was part of the generation that had
            computers available at their fingertips. Despite this convenience, I
            was always fascinated by the technology. I constantly asked myself,
            "How, How can a simple calculation make this software?" The ability
            of these machines to perform complex tasks with such ease and
            precision sparked my curiosity.
          </p>
          <p>
            It was during my biology project when I created my first program in
            Python to convert binary to base 4 that my interest truly blossomed.
            The project aimed to demonstrate to my classmates how digital
            information could be stored in synthetic DNA using the four
            proteins: A, C, G, and T. This experience not only captivated my
            classmates but also solidified my passion for computer science,
            leading me to pursue it further.
          </p>
          <p>
            I spent the next four years of my life immersed in learning software
            development, attending bootcamps, and specializing in web
            technologies. This intensive journey allowed me to learn the ins and
            outs of the web, ultimately leading me to fall in love with web
            development. Knowing that I can create software capable of impacting
            thousands of people is a tremendous privilege. This passion and
            sense of purpose inspired me to found CID, a web app designed to
            help employees in France access all their compensations and meal
            vouchers, providing them with accurate and essential data.
          </p>
        </div>
      </div>
      <div className="about-contact">
        <div className="about-img">
          <img src={profile} alt="profile Logo" className="profile-img" />
        </div>
        <div className="about-socials">
          <a href={links.x}>
            <SvgIcon iconName="x_svg" />
            <p>Follow on X</p>
          </a>
          <a href={links.git}>
            <SvgIcon iconName="github_svg" />
            <p>Follow on Github</p>
          </a>
          <a href={links.linkdin}>
            <SvgIcon iconName="linkdin_svg" />
            <p>Follow on Linkdin</p>
          </a>
          <span className="lin-sep"></span>
          <a href="mailto:eyosias16@gmail.com?subject=Inquiry%20about%20your%20services&body=Hello%20Eyosias,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">
            <SvgIcon iconName="email_svg" />
            <p>eyosias16@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
