import React, {Fragment} from 'react';
import Card from '../Card/Card';
import './Portfolio.css';
import {projects} from '../../projects';


const Portfolio = () => {

    return (
     <section className="portfolio">
         <div className="portfolioContainer">
           {projects.map(project => {
               return (
                  <Fragment key={project.id}>
                       <Card
                   title={project.title}
                   description={project.desc}
                   img={project.img}  
                   link={project.link}
                   code={project.code}
                   alt={project.title}
                   />
                  </Fragment>
               )
           })}
         </div>
     </section>
    )

}

export default Portfolio;