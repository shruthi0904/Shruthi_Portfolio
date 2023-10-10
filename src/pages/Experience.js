import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2021 - Aug 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Full Stack Development (MERN) - NxtWave
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India
          </h4>
          <ul className="list">
            <li>Developed the User Interface web applications using HTML, CSS, JavaScript, React</li>
            <li>Created RESTful Web Services using Node.js and Express.js to serve data to the front-end application in JSON format</li>
            <li>Involved in working on Jenkins for Continuous Integration and for End-to-End automation for all Build and Deployments</li>
            <li>Developed comprehensive unit tests using Jest framework to ensure the functionality and correctness of user interfaces, backend processing, and connectivity in the applications.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IIIT Basar, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Electronics and computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kakatiya High School, Nizamabad, Telangana, India
          </h3>
  
          <p>Secondary School Certificate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
