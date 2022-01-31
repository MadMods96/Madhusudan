import React from "react";
import Home from "../homeScreen/home";
import Projects from "../projects/projects";
import Project2 from "../projects/projects2";
import "./all.css";

export default function All() {
  return (
    <div className="all">
      <Home />
      <Projects />
      <Project2 />
    </div>
  );
}
