import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import profile from "../assets/profile1.jpg";
import TopProjects from "../components/Project";
import Work from "../components/Work";
import EmailNotif from "../components/EmailNotif";
import SvgIcon from "../components/SvgIcon"; // Import the SVG component
import social_links from "../assets/data/socials_links.json";

function Home() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    setLinks(social_links[0]);
  }, []);

  return (
    <div className="Home-section">
      <div className="img-container">
        <img src={profile} alt="profile Logo" className="profile-img" />
      </div>
      <div className="Intro-home">
        <h1>Software developer and founder.</h1>
        <p>
          I’m Eyosias, a software developper and entrepreneur based in
          Clermont-Ferrand. I’m the founder of CID (calcul tes indémnités),
          where I developed a simple application for regular people to calculate
          their compensations.
        </p>
        <div className="social-icons">
          <a href={links.x}>
            <SvgIcon iconName="x_svg" />
          </a>
          <a href={links.linkdin}>
            <SvgIcon iconName="linkdin_svg" />
          </a>
          <a href={links.git}>
            <SvgIcon iconName="github_svg" />
          </a>
        </div>
      </div>
      <div className="exp-section">
        <div className="top-proj">
          <TopProjects />
        </div>
        <div className="sum-container">
          <h2>Summary :</h2>
          <EmailNotif />
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Home;
