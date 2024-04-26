import githubImage from "../assets/icons/Github.png";
import eyeImage from "../assets/icons/Eye.png";
import arrowImage from "../assets/icons/Arrow.png";
import { projectsArray } from "./ProjectImages";
import { useState } from "react";
import useIntersectionObserver from "./Observer";

function Projects({ currentLanguage }: { currentLanguage: string }) {
  const [pageNumber, setPageNumber] = useState(0);
  const {} = useIntersectionObserver();

  function FirstPage() {
    setPageNumber(0);
  }

  function SecondPage() {
    setPageNumber(1);
  }

  function ThirdPage() {
    setPageNumber(2);
  }

  function FourthPage() {
    setPageNumber(3);
  }

  function PreviousPage() {
    if (pageNumber === 0) {
      return;
    }
    setPageNumber((pageNumber) => (pageNumber -= 1));
  }

  function NextPage() {
    if (pageNumber === 3) {
      return;
    }
    setPageNumber((pageNumber) => (pageNumber += 1));
  }

  return (
    <section className="projects">
      <h2 className="heading hidden">
        {currentLanguage == "eng" ? "My Projects" : "ჩემი პროექტები"}
      </h2>

      <div className="row">
        {projectsArray[pageNumber].map((item, index) => (
          <div className="item hidden" key={index}>
            <img
              src={item[0]}
              className="project-img"
              alt="project"
              loading="lazy"
            />
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

      <div className="switcher hidden">
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
        <button className="btn" onClick={FourthPage}>
          4
        </button>
        <button className="btn arrow-btn" onClick={NextPage}>
          <img src={arrowImage} className="right" alt="arrow-icon" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
