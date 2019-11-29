import React from 'react';
import Card from '../Card/Card';
import './Portfolio.css';

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