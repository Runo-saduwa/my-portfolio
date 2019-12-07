import React from 'react';
import Card from '../Card/Card';
import './Portfolio.css';
import {data} from '../../projects';


const Portfolio = () => {

    return (
     <section className="portfolio">
         <div className="portfolioContainer">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         </div>
     </section>
    )

}

export default Portfolio;