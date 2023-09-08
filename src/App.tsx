import { images } from "./Images";
import { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Show More");
  const [isButtonMore, setIsButtonMore] = useState(false);

  const [isLinksOpen, setIsLinksOpen] = useState(false);

  function ShowProjects() {
    setIsButtonMore((isButtonMore) => !isButtonMore);
    isButtonMore ? setButtonText("Show More") : setButtonText("Show Less");
  }

  function ShowLinks() {
    setIsLinksOpen((isLinksOpen) => !isLinksOpen);
  }

  return (
    <>
      <nav className="nav-bar">
        <img src={images[0]} alt="logo" className="logo" />
        <div className={`links ${isLinksOpen ? "active" : ""}`}>
          <a href="#header" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#projects" className="link">
            Projects
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </div>
        <img
          src={isLinksOpen ? images[17] : images[16]}
          alt="links-btn"
          className="links-btn"
          onClick={ShowLinks}
        />
      </nav>

      <header id="header">
        <h1 className="title">
          Hi I am <span>Lucas</span>!
        </h1>
        <h4 className="sub-title">Front-End Developer!</h4>
      </header>

      <main id="about">
        <h2 className="heading">About Me</h2>

        <p className="text">
          Hey there, I'm Lucas, and I'm absolutely thrilled to talk about my
          journey as a front-end developer. Over the years, I've had the
          privilege of working on more than <span>100 Projects</span>, and I
          can't express how much I love what I do.
        </p>
        <p className="text">
          You see, my fascination with coding started as a mere curiosity about
          how websites are built. But that curiosity quickly turned into an
          unshakable passion for creating incredible
          <span> Web Applications</span> and user interfaces. I believe that a
          great user interface isn't just about code and pixels; it's about
          crafting an immersive and user-friendly experience.
        </p>
        <p className="text">
          Looking ahead, I'm beyond excited to continue my journey as a
          front-end developer. The possibilities in this field are endless,
          whether it's building responsive websites, optimizing user
          experiences, or diving into the latest tech trends. I'm here to make
          my mark in the digital world, one project at a time, and I couldn't be
          happier about it!
        </p>
        <p className="text">
          You can see some of my <span>Projects</span> below!
        </p>
      </main>

      <section id="projects">
        <h2 className="heading">Projects</h2>

        <div className="row">
          <div className="item">
            <img src={images[1]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Audiophile</h3>
              <p className="description">
                The purpose of this project is to create a visually appealing
                and functional website that presents a collection of premium
                audio products in an engaging and user-friendly manner. The
                website aims to attract visitors, showcase products, and provide
                a seamless browsing experience.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[2]} alt="tool" className="tool" />
                <img src={images[3]} alt="tool" className="tool" />
                <img src={images[5]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/Audiophile/"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/Audiophile"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={images[4]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Designo</h3>
              <p className="description">
                The primary purpose of this project is to craft an aesthetically
                pleasing and functional website that effectively represents a
                design agency. The website should not only attract visitors but
                also communicate the agency's design expertise and portfolio.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[2]} alt="tool" className="tool" />
                <img src={images[3]} alt="tool" className="tool" />
                <img src={images[5]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/Designo/"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/Designo"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={images[9]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Ip Address Tracker</h3>
              <p className="description">
                The main purpose of this project is to build a web application
                that can retrieve and display the location information (e.g.,
                country, region, city) of a given IP address in a user-friendly
                and visually appealing manner. It serves as a useful tool for
                understanding the origins of online traffic.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[7]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
                <img src={images[5]} alt="tool" className="tool" />
                <img src={images[8]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/IP-Address-Tracker/"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/IP-Address-Tracker"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={images[10]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Coffeeroasters</h3>
              <p className="description">
                The primary purpose of the 'Coffeeroasters' website is to serve
                as an online hub dedicated to promoting and celebrating the
                world of coffee roasting. Through informative content, a vibrant
                community, and an online store, 'Coffeeroasters' strives to
                elevate the coffee experience, enabling visitors to savor every
                sip of their favorite brew while fostering a sense of belonging
                within the global coffee community.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[2]} alt="tool" className="tool" />
                <img src={images[3]} alt="tool" className="tool" />
                <img src={images[5]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/Coffeeroasters/"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/Coffeeroasters"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className={`item ${isButtonMore ? "" : "hidden"}`}>
            <img src={images[13]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Url Shortening API</h3>
              <p className="description">
                The URL Shortening API is your trusted partner for making links
                more manageable. Say goodbye to those unwieldy, complex URLs.
                With our service, you can quickly transform long web addresses
                into concise, shareable links that are easy to remember and
                perfect for social media, messaging, and more.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[2]} alt="tool" className="tool" />
                <img src={images[3]} alt="tool" className="tool" />
                <img src={images[5]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
                <img src={images[8]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/URL-Shortening-API/"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/URL-Shortening-API"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className={`item ${isButtonMore ? "" : "hidden"}`}>
            <img src={images[15]} alt="website image" className="website-img" />
            <div className="content">
              <h3 className="name">Myteam</h3>
              <p className="description">
                Myteam is your all-in-one solution for connecting and
                collaborating with your colleagues. Whether you're working
                together in the same office or remotely, our platform ensures
                that distance is no barrier to effective teamwork. Share ideas,
                files, and updates with ease.
              </p>
              <h4 className="tools-name">Tools Used :</h4>
              <div className="tools-list">
                <img src={images[2]} alt="tool" className="tool" />
                <img src={images[14]} alt="tool" className="tool" />
                <img src={images[3]} alt="tool" className="tool" />
                <img src={images[6]} alt="tool" className="tool" />
              </div>
              <div className="btn-box">
                <a
                  href="https://lack21.github.io/Myteam"
                  target="_blank"
                  className="btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/lack21/Myteam"
                  target="_blank"
                  className="btn"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        <button className="project-btn" onClick={ShowProjects}>
          {buttonText}
        </button>
      </section>

      <section id="contact">
        <h2 className="heading">Contact Me</h2>

        <form className="form">
          <input type="text" placeholder="Enter your name.." />
          <input type="email" placeholder="Enter your email.." />
          <input type="text" placeholder="Enter subject.." />
          <textarea name="message" rows={8} placeholder="Message.."></textarea>
          <button className="submit-btn">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p className="copyright">Powered by Lucas Glonti</p>
        <div className="icons">
          <a href="https://github.com/lack21" target="_blank">
            <img src={images[11]} className="icon" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-glonti-a0675a24b/"
            target="_blank"
          >
            <img src={images[12]} className="icon" alt="linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
