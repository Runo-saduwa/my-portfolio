import React, { Fragment } from "react";
import "./Resume.css";

const Resume = (props) => {
  return (
    <Fragment>
      <div id="timeline-content" className="timeline-content">
        <h1 className={`speaking-header`}>
          Relevant Experience
        </h1>
        <ul className="timeline">
          <li className="event" data-date="Jan 2022 - Present">
            <span className="mobile-date">Jan 2022 - Present</span>
            <h2 className="job-title">
              Senior Frontend Engineer, Flutterwave Inc.
            </h2>
            <p className="job-description">
              <span>
                <span role="img" aria-label="star">⚪</span>
                Worked with a team of highly ambitious professionals to simplify payments in Africa.
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Built a sophisticated Lending App using engineering best practices to empower Flutterwave’s most trusted enterprise merchants to have access to high-end loans. This product has successfully disbursed over $10M since inception (2022).
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Worked with designers, PMs and engineers to design impactful products.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Built and maintained in-house UI components for “Flutterwave for Business” Dashboard.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Implemented testing protocols for managing successful deployments across development, staging and production environments.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Mentored engineers in producing high-quality code that raises the bar to improve performance and scalability in all products
              </span>
            </p>
          </li>
          <li className="event" data-date="Apr 2021 - Dec 2021">
            <span className="mobile-date">Apr 2021 - Dec 2021</span>
            <h2 className="job-title">
              Fullstack Engineer, TechSensus LLC
            </h2>
            <p className="job-description">
              <span>
                <span role="img" aria-label="star">⚪</span>
                Collaborated with a team of highly ambitious professionals to solve the problem of healthcare staffing.
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Worked with designers and PMs to deliver DeviHealth official marketing website, two enterprise apps  and one powerful admin dashboard (Control Center) using ReactJS/NextJS.
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Built and maintained well documented UI components / in-house tools with React.js and SCSS using code best practices.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Performed quality assurance/debugging procedures to provide a secure and functional delivery to production.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Implemented testing protocols for managing successful deployments across development, staging and production environments using the Digital Ocean Cloud Platform.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Mentored engineers  in producing high-quality code that raises the bar to improve performance and scalability in all products.
              </span>
            </p>
          </li>
          <li className="event" data-date="Jan 2020 - Mar 2021">
            <span className="mobile-date">Jan 2020 - Mar 2021</span>
            <h2 className="job-title">
              Frontend Engineer, Troperial Technologies LLC
            </h2>
            <p className="job-description">
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Worked with a team of designers, engineers, PMs to solve the problems of cross-border payments.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Built and maintained a custom UI library based on the brand’s unique design system.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Built Troperial’s official marketing website with React and SCSS.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Implemented a secure P2P chat application to help customers negotiate and exchange currencies between their wallets securely in real-time using React, AWS Amplify, AppSync and DynamoDB.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Performed quality assurance/debugging procedures to provide a secure and functional delivery to production.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Implemented testing protocols for managing successful deployments across development, staging and production environments using AWS.
              </span>
            </p>
          </li>
          <li className="event" data-date="Jan 2019 - Dec 2019">
            <span className="mobile-date">Jan 2019 - Dec 2019</span>
            <h2 className="job-title">
              Frontend Engineer, Creathor Inc.
            </h2>
            <p className="job-description">
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Converted high-fidelity mockups to responsive HTML and CSS code.
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Built Custom UI components and tools for ease of development with TypeScript and React.js
              </span>
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Implemented testing protocols for managing successful deployments across development, staging and production environments using Netlify.
              </span>
            </p>
          </li>
          <li className="event" data-date="Mar 2018 - Dec 2018">
            <span className="mobile-date">Mar 2018 - Dec 2018</span>
            <h2 className="job-title">Open-source Frontend Engineer, Joplin</h2>
            <p className="job-description">
              <span>
                <span role="img" aria-label="star">⚪ </span>
                Collaborated with a diverse team of open-source engineers to improve the Joplin Note application.
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Integrated linting tools for React such as ES Lint and React rule of hooks to enforce engineering best practices.
              </span>
              <span>
                <span role="img" aria-label="star">⚪</span>
                Performed quality assurance/debugging procedures to provide a secure and functional delivery.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Resume;
