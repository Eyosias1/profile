import React, { useState } from "react";
import "../styles/Projects.css";
import profile from "../assets/profile1.jpg";
import SvgIcon from "../components/SvgIcon"; // Import the SVG component
import cid from "../assets/cid.jpg";
import travel from "../assets/Travelit.svg";
import car from "../assets/Car 64.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calcule tes indémnités",
      description:
        "Calcule tes indémnités is the web app to ensuire you are being payed all your indemnites as a french worker.",
      imgSrc: cid,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: [
        "ALL CATEGORIES",
        "full stack",
        "react",
        "mern stack",
        "javascript",
        "python",
      ],
    },
    {
      id: 2,
      title: "Travel-It",
      description:
        "Travel-It is the authentique tourisme app designed for young travelers seeking thrilling experiences and memorable journeys.",
      imgSrc: travel,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: [
        "ALL CATEGORIES",
        "FULL STACK",
        "Ruby on rails",
        "ruby",
        "postgree",
      ],
    },
    {
      id: 3,
      title: "Car-Rental",
      description:
        "Car-Rental is the premier web app designed to make car rentals and reservations a breeze.",
      imgSrc: car,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      keywords: [
        "all categories",
        "full stack",
        "ruby on rails",
        "ruby",
        "postgree",
      ],
    },
  ];
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleKeywordClick = (keyword) => {
    const normalizedKeyword = keyword.toLowerCase();

    setSelectedKeywords((prevKeywords) => {
      const normalizedPrevKeywords = prevKeywords.map((kw) => kw.toLowerCase());

      return normalizedPrevKeywords.includes(normalizedKeyword)
        ? prevKeywords.filter((kw) => kw.toLowerCase() !== normalizedKeyword)
        : [...prevKeywords, keyword];
    });
  };

  const keywords = [
    "all categories",
    "MERN stack",
    "Ruby on Rails",
    "react",
    "full stack",
    "front end",
    "back end",
    "unity",
  ];

  const keywordsLang = [
    "c",
    "java",
    "python",
    "javascript",
    "ruby",
    "c#",
    "assembly",
  ];

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

  const handleItemClick = (url) => {
    window.location.href = url;
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
        <div className="keyword-buttons">
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
            <li key={project.id} onClick={() => handleItemClick(project.link)}>
              <div className="proj-grid">
                <div className="proj-grid-el">
                  <div className="project-icon">
                    <img
                      src={project.imgSrc}
                      alt={`${project.title} Logo`}
                      className="profile-img"
                    />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="link-proj-desc">
                    <SvgIcon iconName="link_svg" />
                    <a href={project.link}>{project.title}</a>
                  </div>
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
