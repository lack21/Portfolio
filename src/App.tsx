import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import langIcon from "./assets/icons/Language_Icon.png";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("eng");

  function changeLanguage() {
    setCurrentLanguage(currentLanguage == "eng" ? "geo" : "eng");
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Portfolio"
            element={<Layout currentLanguage={currentLanguage} />}
          >
            <Route index element={<Home currentLanguage={currentLanguage} />} />
            <Route
              path="about"
              element={<About currentLanguage={currentLanguage} />}
            />
            <Route
              path="projects"
              element={<Projects currentLanguage={currentLanguage} />}
            />
            <Route
              path="contact"
              element={<Contact currentLanguage={currentLanguage} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <button className="lang-btn" onClick={() => changeLanguage()}>
        <img src={langIcon} alt="language icon" />
      </button>
    </>
  );
}

export default App;
