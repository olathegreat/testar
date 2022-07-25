import React,{useState,useContext} from 'react';
import { ThemeContext } from '../Context';
import "../regular/fonts/Direction Icons/icofont.min.css";
import "./Style.css";

const UpIcon = () => {


    const theme =useContext(ThemeContext);
    const darkMode= theme.state.darkmode;
    const[screenChecker, setScreenChecker]=useState(false);


    const toggleVisible = ()=>{
        const scrolled =document.documentElement.scrollTop;
        if(scrolled>300){
            setScreenChecker(true);
        }else if(scrolled<=300){
            setScreenChecker(false);
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    window.addEventListener("scroll", toggleVisible)

  return (
    <div className='myBtn' onClick={scrollToTop}>
      <i  style={{display:screenChecker?"inline":"none", color:darkMode && "black"}} className='icofont-arrow-up'></i>
    </div>
  );
}

export default UpIcon;
