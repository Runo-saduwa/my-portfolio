import React, { Fragment } from "react";
import "./Resume.css";

const Resume = (props) => {
  return (
    <Fragment>
      <div id="timeline-content" className="timeline-content">
        <h1 className={`speaking-header`}>✨ Relevant Experience ✨</h1>
        <ul className="timeline">
          <li className="event" data-date="April 2021 - Present">
            <span className="mobile-date">April 2021 - Present</span>
            <h3 className="job-title">
              Frontend Engineer, DeviHealth Inc. (An end-to-end Healthcare
              workforce management tool)
            </h3>
            <p className="job-description">
              <span>
                <span>🌟 </span> Collaborated with Product designers to build a
                reusable and accessible UI library for fast UI development using
                modern React.
              </span>
              <span>
                <span>🌟 </span> Writes detailed documentation on a regular
                basis to keep new developers up-to-date with the project
                history.
              </span>
              <span>
                <span>🌟 </span> Built and released v1.0 of DeviHealth Clinician
                Dashboard under 5 months of active development which had over
                500 sign ups on the first day of release.
              </span>
              <span>
                <span>🌟 </span> Maintaining codebase and gradually
                transitioning to full stack engineering role because of my
                consistent contribution to the backend built on NodeJS.
              </span>
            </p>
          </li>
          <li className="event" data-date="May 2020 - April 2021">
            <span className="mobile-date">May 2020 - April 2021</span>
            <h3 className="job-title">
              Lead Frontend Engineer, Troperial Technologies LLC
            </h3>
            <p className="job-description">
              <span>
                <span>🌟 </span> Led a team of three Frontend engineers to build
                a P2P marketplace using a variety of JavaScript technologies and
                AWS cloud services such as React, Redux, React Native,
                AmplifyJS, AWS Cognito, AWS AppSync, AWS DynamoDB, etc
              </span>

              <span>
                <span>🌟 </span> Responsible for pixel perfect UI design
                implspanentations using React and CSS/Sass.
              </span>
              <span>
                <span>🌟 </span> Designed and Built a complex and robust P2P
                chat application with DynamoDB, AppSync, Redux and GraphQL
              </span>

              <span>
                <span>🌟 </span> Incharge of maintaining the client-side
                codebase and reviewing pull requests from other teammates.
              </span>
            </p>
          </li>

          <li className="event" data-date="Nov. 2020 - Feb. 2021">
            <span className="mobile-date">Nov. 2020 - Feb. 2021</span>
            <h3 className="job-title">
              UI Engineer (Internship) , Textras Inc.
            </h3>
            <p className="job-description">
              <span>
                <span>🌟 </span> Responsible for building custom spanail
                tspanplates from scratch.
              </span>

              <span>
                <span>🌟 </span> Responsible for quarterly maintenance and
                upgrade of core JavaScript libraries / plugins used in the
                mobile app.
              </span>

              <span>
                <span>🌟 </span> Designed and implspanented Textras website with
                Figma and React respectively.
              </span>

              <span>
                <span>🌟 </span> Worked with technologies such as STOMP.JS and
                RabbitMQ to initiate message queuing within Textras app for
                real-time chat messages.
              </span>
            </p>
          </li>
          <li className="event" data-date="July 2020 - Sept. 2020">
            <span className="mobile-date">July 2020 - Sept. 2020</span>
            <h3 className="job-title">Frontend Engineer, Creathor</h3>
            <p className="job-description">
              <span>
                <span>🌟 </span> Interpret designs to pixel perfect code.
              </span>

              <span>
                <span>🌟</span> Worked with a variety of languages and
                frameworks such as TypeScript, React, Gatsby, and Redux to build
                scalable products.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Resume;
