import React, {useEffect, useState} from 'react';
import './Footer.css';

const Footer = (props) => {
    const [state, setState] = useState(null);
    useEffect(() => {
      let date = new Date();
      let year = date.getFullYear();
      setState(year);
    }, [])
    return (
     <footer>
         <div className="footerContainer">
             <p>COPYRIGHT &copy; {state} RUNO SADUWA</p>
         </div>
     </footer>
    )
}



export default Footer;

