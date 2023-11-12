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
import georgianFlagImage from "../assets/Georgian_Flag.png";
import englishFlagImage from "../assets/English_Flag.png";
import russianFlagImage from "../assets/Russian_Flag.png";
import { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
          <div className="skill">
            <img src={reactImage} alt="React" />
            <h3 className="name">React</h3>
          </div>
          <div className="skill">
            <img src={tsImage} alt="Typescript" />
            <h3 className="name">TypeScript</h3>
          </div>
          <div className="skill">
            <img src={jsImage} alt="Javascript" />
            <h3 className="name">JavaScript</h3>
          </div>
          <div className="skill">
            <img src={nodejsImage} alt="Nodejs" />
            <h3 className="name">NodeJS</h3>
          </div>
          <div className="skill">
            <img src={htmlImage} alt="Html" />
            <h3 className="name">HTML</h3>
          </div>
          <div className="skill">
            <img src={cssImage} alt="Css" />
            <h3 className="name">CSS</h3>
          </div>
          <div className="skill">
            <img src={sassImage} alt="Scss" />
            <h3 className="name">Scss</h3>
          </div>
          <div className="skill">
            <img src={pythonImage} alt="Python" />
            <h3 className="name">Python</h3>
          </div>
          <div className="skill">
            <img src={gitImage} alt="Git" />
            <h3 className="name">GIT</h3>
          </div>
          <div className="skill">
            <img src={apiImage} alt="Api" />
            <h3 className="name">API</h3>
          </div>
          <div className="skill">
            <img src={tailwindImage} alt="Tailwind" />
            <h3 className="name">Tailwind</h3>
          </div>
        </div>
      </section>

      <section className="languages">
        <h2 className="heading">Languages</h2>

        <div className="row">
          <div className="language">
            <img src={georgianFlagImage} alt="georgia" />
            <h3 className="name">Georgian</h3>
          </div>
          <div className="language">
            <img src={englishFlagImage} alt="england" />
            <h3 className="name">English</h3>
          </div>
          <div className="language">
            <img src={russianFlagImage} alt="russia" />
            <h3 className="name">Russian</h3>
          </div>
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
