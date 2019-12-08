import React from 'react';
import './Timeline.css';


    const Timeline = () => {
      return (
  
        <div id="timeline-content" className="timeline-content">
          <h1 className="speaking-header">Speaking Activities</h1>
          <ul className="timeline">

          <li className="event" data-date="18th September, 2019">
              <span className="mobile-date">8th October, 2019</span>
              <h3 className="job-title">Programming Instructor, O.A., Warri.</h3>
              <p className="job-description">job descriptionn - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea ducimus totam fuga recusandae? Eos est ab neque perferendis aspernatur?</p>
            </li>
          <li className="event" data-date="18th September, 2019">
              <span className="mobile-date">8th October, 2019</span>
              <h3 className="job-title">Google DevFest 2019, Warri.</h3>
              <p className="job-description">job descriptionn - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea ducimus totam fuga recusandae? Eos est ab neque perferendis aspernatur?</p>
            </li>
          
            <li className="event" data-date="18th September, 2019">
              <span className="mobile-date">18th September, 2019</span>
              <h3 className="job-title">Facebook Developers Circles Meetup, Warri.</h3>
              <p className="job-description">job descriptionn - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea ducimus totam fuga recusandae? Eos est ab neque perferendis aspernatur?</p>
            </li>

            <li className="event" data-date="28th August, 2019">
              <span className="mobile-date">28th August, 2019</span>
              <h3 className="job-title">TechFest - Evolve and Emerge, FUPRE.</h3>
              <p className="job-description">job descriptionn - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea ducimus totam fuga recusandae? Eos est ab neque perferendis aspernatur?</p>
            </li>
           
          
           
      
           
          </ul>
        </div>
      );
    }



export default Timeline;