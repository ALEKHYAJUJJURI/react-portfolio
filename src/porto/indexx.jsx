import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./indexx.css";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { About } from "./about";
import { ContactMe } from "./contact";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Home } from "./home";
export function IndexOfPorto() {
  return (
    <div className="bg-con">
      <BrowserRouter>
        <div className="bg-con-min text-white">
          <header>
            <nav className="d-flex justify-content-between p-3">
              <div>
                <span className="fs-5 title">alekhya.</span>
              </div>
              <div className="">
                <a
                  className="text-decoration-none btn"
                  href="Alekhya_J.pdf"
                  target="_blank"
                >
                  Resume<i className="bi bi-eye-fill"></i>
                </a>
              </div>
            </nav>
            <Paper
              elevation={18}
              className=""
              sx={{ backgroundColor: "rgba(0,0,25,0)" }}
            >
              <div className="card-con">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <img
                    src="profile2.jpg"
                    style={{ width: "35%" }}
                    className="img rounded rounded-4 p-2"
                  />
                </div>
                <div className="w-50 text-white fw-bold">
                  <span className="">I am Alekhya.</span>
                  <br />
                  <span className="text-">UI/UX Developer</span>
                  <br />
                  <Link
                    className="text-dark fw-bold text-decoration-none"
                    to="/about"
                    style={{ filter: "drop-shadow(1px 1px 10px white)" }}
                  >
                    ABOUT ME<span className="bi bi-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </Paper>
          </header>
          <main className=" bg-warning">
            <div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="about" element={<About />} />
                <Route path="contactMe" element={<ContactMe />} />

                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />

                <Route
                  path="*"
                  element={
                    <div>
                      <h2>Not Found</h2>
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}
