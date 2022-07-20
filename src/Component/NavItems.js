import React , {useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import "../regular/icofont.css"
import "./Style.css"

const NavItems = () => {
  const[ icondisplay,setIconDisplay] =  useState(false);
  const[ linkDisplay, setLinkDisplay] = useState(false);
  const[windowSize,setWindowSize] = useState(getWindowSize());
  const [screenChecker, setScreenChecker] = useState(true);

 
  useEffect(()=>{
    function handleWindowResize(){
      setWindowSize(getWindowSize());
    }
    if (window.innerWidth<765){
      setScreenChecker(false);
    }else{
      setScreenChecker(true)
    }
    window.addEventListener("resize",handleWindowResize);
    console.log(window.innerWidth)
    return ()=>{
      window.removeEventListener("resize",handleWindowResize);
    };
  },[window.innerWidth]);

  function getWindowSize(){
    const {innerWidth, innerHeight} =window;
    return {innerWidth, innerHeight};
  }





  return (
    <div className='nav'>


        <ul className='defaultScreen' style={{ display:!screenChecker&&'none',padding:"5px", boxShadow:"1px 1px 5px #025D76"}}>
              
              <div className='brand'>
                 <img src='./testar.svg' style={{width:"70px", height:"70px",fill:"white", marginRight:"5px"}}></img>
                 <h1><Link to="/">TESTAR</Link></h1>

              </div>
                
              <div className='lists'>

                        <li><Link to="/">Home</Link> </li>
                       <li><Link to="/bookshelf">Bookshelf</Link></li>
                       <li><Link to="/explore">Explore</Link></li> 
                    <li><Link to="/test">Test</Link></li>
                     <li> <Link to="/sign">Sign In</Link></li>
                           

     

              </div>

              
              

        </ul>



      <ul className='smallScreen' style={{ display:screenChecker?"none":"inline-flex",padding:"5px", boxShadow:"1px 1px 5px #025D76"}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                  
                       
                <img src='./testar.svg' style={{width:"50px", height:"50px",fill:"white", marginRight:"5px"}}></img>
                <h3>TESTAR</h3>
    
  
                <i className='icofont-close'  style={{display:!icondisplay && "none",marginLeft:"20px"}} onClick={(e)=>{
                     setIconDisplay(false);
                      setLinkDisplay(false);
                }} ></i>
               <i className='icofont-navigation-menu' style={{display:icondisplay&&"none" ,marginLeft:"20px"}} onClick={(e)=>{
                     setIconDisplay(true);
                      setLinkDisplay(true);

               }}></i>
            </div>



      <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <li style={{display:linkDisplay?"flex":"none"}}><Link to="/">Home</Link> </li>
        <li style={{display:linkDisplay?"flex":"none"}}><Link to="/bookshelf">Bookshelf</Link></li>
        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
        <li style={{display:linkDisplay?"flex":"none"}}><Link to="/explore">Explore</Link></li>
        <li style={{display:linkDisplay?"flex":"none"}}><Link to="/test">Test</Link></li>
        <li style={{display:linkDisplay?"flex":"none"}}> <Link to="/sign">Sign In</Link></li>
      </div>



      </ul>

       
       
       
      
    </div>
  );
}

export default NavItems;
