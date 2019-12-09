import React, {useEffect, useState, useContext} from 'react';
import {themeContext} from '../../Context';
import './Footer.css';

const Footer = (props) => {
    const { darkMode } = useContext(themeContext);
    const [state, setState] = useState(null);
    useEffect(() => {
      let date = new Date();
      let year = date.getFullYear();
      setState(year);
    }, [])
    return (
     <footer>
         <div className="footerContainer">
             <p className={`${darkMode ? 'darkMode' : 'footerTxt'}`}>COPYRIGHT &copy; {state} RUNO SADUWA</p>
         </div>
     </footer>
    )
}



export default Footer;

