import reactImage from "../assets/icons/React.png";
import sassImage from "../assets/icons/Sass.png";
import jsImage from "../assets/icons/Js.png";
import cssImage from "../assets/icons/Css.png";
import htmlImage from "../assets/icons/Html.png";
import apiImage from "../assets/icons/Api.png";
import tsImage from "../assets/icons/Ts.png";
import tailwindImage from "../assets/icons/Tailwind.png";
import nodejsImage from "../assets/icons/NodeJS.png";
import gitImage from "../assets/icons/git.png";
import pythonImage from "../assets/icons/Python.png";
import npmImage from "../assets/icons/Npm.png";
import viteImage from "../assets/icons/Vite.svg";
import threejsImage from "../assets/icons/Threejs.svg";
import georgianFlagImage from "../assets/icons/Georgian_Flag.png";
import englishFlagImage from "../assets/icons/English_Flag.png";
import russianFlagImage from "../assets/icons/Russian_Flag.png";
import useIntersectionObserver from "./Observer";
import Contact from "./Contact";

function Home() {
  const {} = useIntersectionObserver();

  const skillsArray = [
    ["React", reactImage],
    ["Typescript", tsImage],
    ["Javascript", jsImage],
    ["NodeJs", nodejsImage],
    ["HTML", htmlImage],
    ["CSS", cssImage],
    ["Sass", sassImage],
    ["Python", pythonImage],
    ["GIT", gitImage],
    ["API", apiImage],
    ["Tailwind", tailwindImage],
    ["Npm", npmImage],
    ["Vite", viteImage],
    ["Threejs", threejsImage],
  ];

  const languagesArray = [
    ["English", englishFlagImage],
    ["Russian", russianFlagImage],
    ["Georgian", georgianFlagImage],
  ];

  return (
    <>
      <header className="header hidden">
        <h1 className="title">Hi, I'm Luka!</h1>
        <p className="sub-title">Front-End Developer</p>
      </header>

      <section className="skills hidden">
        <h2 className="heading">Skills</h2>

        <div className="row">
          {skillsArray.map((item, index) => (
            <div className="skill" key={index}>
              <img src={item[1]} alt="skill-icon" />
              <h3 className="name">{item[0]}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="languages hidden">
        <h2 className="heading">Languages</h2>

        <div className="row">
          {languagesArray.map((item, index) => (
            <div className="language" key={index}>
              <img src={item[1]} alt="language" />
              <h3 className="name">{item[0]}</h3>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
