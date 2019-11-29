import React from 'react';
import './Card.css';
import prj from '../../images/akumlate.png';

const Card = ({title, description, img}) => {
    return (
        <div className="card">
            <h1>CGPA Calculator</h1>
            <p>a cgpa Calculator to calculate students cgpa</p>
            <div className="imgBox">
            <img className="prjImage" src={prj} alt="project"/>
            </div>
            <button>View Case Study</button>
        </div>
    )
}



export default Card;