import { Outlet, Link } from "react-router-dom";
import githubImage from "../assets/Github.png";
import linkedinImage from "../assets/Linkedin.png";
import youtubeImage from "../assets/Youtube.png";

function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/Portfolio" className="link">
          Home
        </Link>
        <Link to="/Portfolio/About" className="link">
          About
        </Link>
        <Link to="/Portfolio/Projects" className="link">
          Projects
        </Link>
        <Link to="/Portfolio/Contact" className="link">
          Contact
        </Link>
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="text">Powered by Luka Glonti</p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/lucas-glonti-a0675a24b/"
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
    </>
  );
}

export default Layout;
