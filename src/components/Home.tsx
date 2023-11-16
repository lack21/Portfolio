import reactImage from "../assets/React.png";
import sassImage from "../assets/Sass.png";
import jsImage from "../assets/Js.png";
import cssImage from "../assets/Css.png";
import htmlImage from "../assets/Html.png";
import apiImage from "../assets/Api.png";
import tsImage from "../assets/Ts.png";
import tailwindImage from "../assets/Tailwind.png";
import nodejsImage from "../assets/NodeJS.png";
import gitImage from "../assets/git.png";
import pythonImage from "../assets/Python.png";
import npmImage from "../assets/Npm.png";
import viteImage from "../assets/Vite.svg";
import threejsImage from "../assets/Threejs.svg";
import georgianFlagImage from "../assets/Georgian_Flag.png";
import englishFlagImage from "../assets/English_Flag.png";
import russianFlagImage from "../assets/Russian_Flag.png";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

  function ResetForm() {
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 2000);
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Hi, I'm Luka!</h1>
        <p className="sub-title">Front-End Developer</p>
      </header>

      <section className="skills">
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

      <section className="languages">
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

      <section className="contact first">
        <h2 className="heading">Contact Me</h2>
        <p className="sub-heading">Email me on relaxing987fhbsnd@gmail.com</p>

        <form
          className="form"
          action="https://formsubmit.co/relaxing987fhbsnd@gmail.com"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
          <button className="btn" type="submit" onClick={ResetForm}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Home;
