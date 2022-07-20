import React,{useContext}from "react";
import "../regular/icofont.css"
import "./Style.css"
import { ThemeContext } from '../Context';


const Footer = () => {
    
  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode;
  return (
    <div className="footer" style={{  backgroundColor: darkMode? "#222" : "#62e5ff",color: darkMode && "white", boxShadow:"5px 5px 10px #025D76"}}>
        <div className="container">
            <i className="icofont-copyright">Testar 2022</i>
            <a href="#nav">Go to top</a>
        </div>
        <div className="designed">
            Designed by Olarotimi Olaniran
        </div>
      
    </div>
  );
}

export default Footer;
