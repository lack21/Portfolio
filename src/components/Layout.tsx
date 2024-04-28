import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import githubImage from "../assets/icons/Github.png";
import linkedinImage from "../assets/icons/Linkedin.png";
import youtubeImage from "../assets/icons/Youtube.png";
import themeImage from "../assets/icons/Theme.png";

function Layout({ currentLanguage }: { currentLanguage: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTheme, setIsTheme] = useState(false);

  const updateCursorPosition = (e: any) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  function setTheme(e: any) {
    document.body.className = e.target.className;
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Portfolio" className="link">
          {currentLanguage == "eng" ? "Home" : "მთავარი"}
        </Link>
        <Link to="/Portfolio/About" className="link">
          {currentLanguage == "eng" ? "About" : "ჩემს შესახებ"}
        </Link>
        <Link to="/Portfolio/Projects" className="link">
          {currentLanguage == "eng" ? "Projects" : "პროექტები"}
        </Link>
        <Link to="/Portfolio/Contact" className="link">
          {currentLanguage == "eng" ? "Contact" : "კონტაქტი"}
        </Link>
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="text">
          {currentLanguage == "eng"
            ? "Powered by Luka Glonti"
            : "შემქმნელი : ლუკა ღლონტი"}
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/luka-glonti-a0675a24b/"
            target="_blank"
          >
            <img src={linkedinImage} className="icon" alt="linkedin-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UClKa4QqWti69LuZOu2vYwRw"
            target="_blank"
          >
            <img src={youtubeImage} className="icon" alt="youtube-icon" />
          </a>
          <a href="https://github.com/lack21" target="_blank">
            <img src={githubImage} className="icon" alt="github-icon" />
          </a>
        </div>
      </footer>
      <div
        className="cursor"
        onMouseMove={updateCursorPosition}
        style={{ left: `${position.x - 6}px`, top: `${position.y - 6}px` }}
      ></div>
      <button className="theme-btn" onClick={() => setIsTheme(!isTheme)}>
        <img src={themeImage} alt="theme-icon" />
        <div className={`container ${isTheme ? "active" : ""}`}>
          <div className="purple-theme" onClick={setTheme}></div>
          <div className="red-theme" onClick={setTheme}></div>
          <div className="cyan-theme" onClick={setTheme}></div>
          <div className="yellow-theme" onClick={setTheme}></div>
        </div>
      </button>
    </>
  );
}

export default Layout;
