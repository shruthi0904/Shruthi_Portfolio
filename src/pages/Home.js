import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shruthi</h2>
        <div className="prompt">
          <p>A Fullstack developer with a passion for learning and creating.</p>
          <a href="https://linkedin.com/in/shruthip4" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shruthip830@gmail.com" target="_blank" rel="noreferrer" ><EmailIcon /></a>
          <a href="https://github.com/shruthi0904" target="_blank" rel="noreferrer"><GithubIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
