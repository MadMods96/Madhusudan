import React from "react";
// import SideBar from "../sideBar/sideBar";
import "./projects.css";
import pm1 from "../../assets/porfolio-mobile-1.png";
import pm2 from "../../assets/portfolio-mobile-2.png";
import pm3 from "../../assets/porfolio-mobile-3.png";
import pm4 from "../../assets/portfolio-mobile-4.png";
import pt1 from "../../assets/porfolio-tablet-1.png";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <div className="projects-left">
          <h1>01</h1>
          <div className="content">
            <h1 className="tola-title">10Tola</h1>
            <p className="title-down-p">• Front-End Project • UI Design</p>
            <p className="title-down-desc">
              10Tola has leveraged simple technology to create powerful
              solutions targeted to the jewelry business.{" "}
            </p>
            <h2 className="down-show">Web App</h2>
          </div>
        </div>
        <div className="projects-right">
          <div className="project-img">
            <img src={pt1} alt="tablet view" />
          </div>
        </div>
      </div>
      <div className="projects-down-img">
        <img src={pm1} alt="mobile image" />
        <img src={pm2} alt="mobile image" />
        <img src={pm3} alt="mobile image" />
        <img src={pm4} alt="mobile image" />
      </div>
    </>
  );
}

// triangle design

// border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-top: 100px solid red;
