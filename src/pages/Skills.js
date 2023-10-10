import React from "react";
import "../styles/Skills.css"

function Skills() {
    return (
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, React Hooks, HTML, CSS, JavaScript, NPM, BootStrap, MaterialUI, JSON,Git, Linux,TailwindCSS, StyledComponents, MaterialUI
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, MySQL, MongoDB, REST API, AWS.
              </span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript, Python</span></li>
          </ol>
        </div>
    )
}

export default Skills