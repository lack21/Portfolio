import githubImage from "../assets/Github.png";
import eyeImage from "../assets/Eye.png";
import arrowImage from "../assets/Arrow.png";
import { projectsArray } from "./ProjectImages";
import { useState } from "react";

function Projects() {
  const [pageNumber, setPageNumber] = useState(0);

  function FirstPage() {
    setPageNumber(0);
  }

  function SecondPage() {
    setPageNumber(1);
  }

  function ThirdPage() {
    setPageNumber(2);
  }

  function PreviousPage() {
    if (pageNumber === 0) {
      return;
    }
    setPageNumber((pageNumber) => (pageNumber -= 1));
  }

  function NextPage() {
    if (pageNumber === 2) {
      return;
    }
    setPageNumber((pageNumber) => (pageNumber += 1));
  }

  return (
    <section className="projects">
      <h2 className="heading">My Projects</h2>

      <div className="row">
        {projectsArray[pageNumber].map((item, index) => (
          <div className="item" key={index}>
            <img src={item[0]} className="project-img" alt="project" />
            <div className="layer">
              <a href={item[1]} className="link" target="_blank">
                <img src={eyeImage} alt="eye-icon" />
              </a>
              <a href={item[2]} className="link" target="_blank">
                <img src={githubImage} alt="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="switcher">
        <button className="btn arrow-btn" onClick={PreviousPage}>
          <img src={arrowImage} alt="arrow-icon" />
        </button>
        <button className="btn" onClick={FirstPage}>
          1
        </button>
        <button className="btn" onClick={SecondPage}>
          2
        </button>
        <button className="btn" onClick={ThirdPage}>
          3
        </button>
        <button className="btn arrow-btn" onClick={NextPage}>
          <img src={arrowImage} className="right" alt="arrow-icon" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
