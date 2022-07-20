import React from 'react';
import NavItems from './NavItems';
import Footer from './Footer';
import explore from "./img/explore.png"
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
         <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>
                <div className="container" style={{height:"80vh", display:"flex",flexDirection:"column" ,justifyContent:"center", alignItems:"center"}}>
                    <img className='animated wobble' style={{display:"flex", width:"50%", animationDuration:"3s"}} src={explore}/>

                     <div style={{marginTop:"30px", fontSize:"1.5em"}}>Oops page cannot be found</div>
                     <div style={{}}><Link to="/">Go to Home</Link></div>
                </div>




                <Footer/>
    
      
    </div>
  );
}

export default Error;
