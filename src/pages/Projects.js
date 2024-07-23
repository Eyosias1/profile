import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import profile from "../assets/profile1.jpg";
import SvgIcon from "../components/SvgIcon"; // Import the SVG component
// images
import cid from "../assets/cid.jpg";
import travel from "../assets/Travelit.svg";
import car from "../assets/Car 64.png";
import img42 from "../assets/42.png";
import rab from "../assets/rabbit.jpg";
import qrcode from "../assets/QR Code.png";
import soko from "../assets/sokoban.jpg";
import connect from "../assets/connect4.jpg";
import compi from "../assets/compi.png";
import noimg from "../assets/noimage.jpg";
import medium from "../assets/medium.png";
import server from "../assets/server.png";
import assembly from "../assets/assembly.png";
import algo from "../assets/algorithm.png";
import game2048 from "../assets/game2048.png";
import frontEnd from "../assets/front-endPack.png";
import js from "../assets/javascript.png";

import projectsData from "../assets/data/projects.json";
import keywordsData from "../assets/data/sofwareKeywords.json";
import keywordsLangData from "../assets/data/LanguageKeywords.json";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [keywordsLang, setKeywordsLang] = useState([]);

  const [selectedKeywords, setSelectedKeywords] = useState(["all categories"]);

  const imgMap = {
    frontEnd: frontEnd,
    game2048: game2048,
    algo: algo,
    js: js,
    cid: cid,
    travel: travel,
    car: car,
    img42: img42,
    rab: rab,
    qr_c: qrcode,
    soko: soko,
    connect: connect,
    compi: compi,
    noimg: noimg,
    medium: medium,
    server: server,
    assembly: assembly,
  };

  useEffect(() => {
    setProjects(projectsData);
    setKeywords(keywordsData);
    setKeywordsLang(keywordsLangData);
  }, []);

  const handleKeywordClick = (keyword) => {
    const normalizedKeyword = keyword.toLowerCase();

    setSelectedKeywords((prevKeywords) => {
      const normalizedPrevKeywords = prevKeywords.map((kw) => kw.toLowerCase());

      return normalizedPrevKeywords.includes(normalizedKeyword)
        ? prevKeywords.filter((kw) => kw.toLowerCase() !== normalizedKeyword)
        : [...prevKeywords, keyword];
    });
  };

  const filteredProjects = projects.filter((project) =>
    selectedKeywords.every((kw) =>
      project.keywords
        .map((prkw) => prkw.toLowerCase())
        .includes(kw.toLowerCase()),
    ),
  );
  const countKeywordOccurrences = (projects) => {
    const keywordCount = {};

    projects.forEach((project) => {
      project.keywords.forEach((keyword) => {
        const normalizedKeyword = keyword.toLowerCase();
        if (keywordCount[normalizedKeyword]) {
          keywordCount[normalizedKeyword]++;
        } else {
          keywordCount[normalizedKeyword] = 1;
        }
      });
    });

    return keywordCount;
  };

  const keywordCount = countKeywordOccurrences(projects);

  const handleItemClick = (project) => {
    if (project.link) {
      window.location.href = project.link;
    } else {
      window.location.href = project.linkToGit;
    }
  };

  return (
    <div className="project-page">
      <h1>Things I’ve made trying to put my dent in the universe.</h1>
      <p>
        I’ve worked on tons of little projects over the years but these are the
        ones that I’m most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </p>
      <div className="proj-keyword">
        <h1>Explore all {projects.length} projects</h1>
        <h3>Software developement</h3>
        <div className="keyword-buttons">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              className={selectedKeywords.includes(keyword) ? "active" : ""}
            >
              {keyword.toUpperCase()} (
              {keywordCount[keyword.toLowerCase()] || 0})
            </button>
          ))}
        </div>
        <h3>Programming languages</h3>
        <div className="keyword-buttons lang-key">
          {keywordsLang.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              className={selectedKeywords.includes(keyword) ? "active" : ""}
            >
              {keyword.toUpperCase()} (
              {keywordCount[keyword.toLowerCase()] || 0})
            </button>
          ))}
        </div>
      </div>
      <div className="all-Project">
        <ul className="projects-grid">
          {filteredProjects.map((project) => (
            <li key={project.id} onClick={() => handleItemClick(project)}>
              <div className="proj-grid">
                <div className="proj-grid-el">
                  <div className="project-icon">
                    {project.imgSrc && (
                      <img
                        src={imgMap[project.imgSrc]}
                        alt={`${project.title} Logo`}
                        className="profile-img"
                      />
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <h3>Tech Stack :</h3>
                  <div className="project-keywords">
                    {project.techStack.map((stack) => (
                      <a>{stack.toUpperCase()}</a>
                    ))}
                  </div>
                  {project.link && (
                    <div className="link-proj-desc">
                      <SvgIcon iconName="link_svg" />
                      <a href={project.link}>{project.shortLink}</a>
                    </div>
                  )}
                  {project.linkToGit && (
                    <a className="git-link" href={project.linkToGit}>
                      <SvgIcon iconName="github_svg" />
                      Git Hub
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
