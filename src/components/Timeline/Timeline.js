import React, { Fragment } from "react";
import "./Timeline.css";

const Timeline = (props) => {
  return (
    <Fragment>
      <div id="timelinex-content" className="timelinex-content">
        <h1 className={`speaking-header`}>Speaking Activities</h1>
        <ul className="timelinex">
          {/* <li className="event" data-date="May - October">
            <span className="mobile-date">May 20th - October 28th</span>
            <h3 className="job-title">
              Introduction to Software Development, O.A. Warri.
            </h3>
            <p className="job-description">
              I was the lead instructor incharge of teaching and mentoring
              beginners in learning the valuable and lucrative craft of coding
              over a period of 3 months. We focused on web development and by
              the end of the program students were able to build modern
              applications with HTML5, CSS3 and JavaScript.
            </p>
          </li> */}
          <li className="event" data-date="5th October, 2019">
            <span className="mobile-date">5th October, 2019</span>
            <h3 className="job-title">
              Gatsby: What, Why and How? - Google DevFest 2019, Warri.
            </h3>
            <p className="job-description">
              Google DevFest is arguably the largest tech event in Nigeria that
              features world class developers from different parts of the world.
              I was priviledged to give a talk about Gatsby, which was one of
              the major sponsors of the event held in warri.
            </p>
          </li>

          <li className="event" data-date="14th September, 2019">
            <span className="mobile-date">16th September, 2019</span>
            <h3 className="job-title">
              Introduction to React - Facebook Developers Circles Meetup, Warri.
            </h3>
            <p className="job-description">
              I gave a detailed introduction to React, which is a Facebook
              technology responsible for building powerful user interfaces for
              some of the most popular applications (Intagram, Netflix, WhatsApp
              Web, Twitter e.t.c.) in the world.
            </p>
          </li>

          <li className="event" data-date="28th August, 2019">
            <span className="mobile-date">28th August, 2019</span>
            <h3 className="job-title">
              Becoming a Frontend Developer in 2019 - TechFest 2019, FUPRE.
            </h3>
            <p className="job-description">
              As an Ingressive Ambassador, i organized the largest and most
              anticipated tech event on campus. Over 180 students were impacted
              and inspired to get involved in tech.
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Timeline;
