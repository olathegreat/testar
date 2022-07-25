import React ,{useContext}from 'react';
import "../regular/icofont.css";
import reading from "./img/reading.png";
import { ThemeContext } from '../Context';
import video from "./video/video.mp4";
import Footer from './Footer';
import NavItems from './NavItems';
import "./Style.css"

const Bookshelf = ({bookData}) => {

  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode;



  const BookDisplay = bookData.map((item)=>{
    const{imglink,name,author,description,booklink} = item
    return(
      <div className=' col-12 col-sm-4'>
        <div className=''>
          <div>
          <img className='' alt={name} src={imglink}/>

          </div>

         
          <div className=''>
            <div className='bookname'>{name}</div>
            <div className='author'>Author: {author}</div>
            <div className='description'>{description}</div>
            <div className='download'>
               <a href={booklink}>  <i className='icofont-download'>Download</i>    </a>
            </div>
           

          </div>

        </div>

      </div>
    )
  })
  return (

    <div>
               <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>
                <div className='bookshelf'>
      
      <div className='jumbotron' style={{  backgroundColor: darkMode? "#222" : "rgb(250, 116, 57)",color: "white"}}>
        
     
         <div className='container'>

           <div className='row'>
              <div className='homeDesc col-sm-6'>
                    <h1>Read More</h1>
                    <div className='descContent'>
                      We have an array of educational books you can read here,
                      and also related videos at the lower part of this page
                      that covers diverse topic. The fields covered includes, politics,
                      economy,sports
                    </div>
                   
                      {/* <br/>
                      <Link style={{color:"white", backgroundColor:"#0b9de0"}} to="/test">Take Assessment</Link> */}

                </div>
                <div className='col-sm-6'>
                   <img src={reading} alt=""/>
                </div>
       
            </div>
          </div> 
   </div>



      <div className='container'>
        <h3>Books</h3>
        <div>Here is a collection of some of our available books for your consumption. Hit the download button to download</div>
        <div className='row'>
          {BookDisplay}
        </div>



        <div className="video">
                    <h3>You can also watch some tutorial videos below</h3>
                    <iframe title="vidoeplayer" src={video} sandbox=""/>
      </div>
      </div>
    
    </div>
    



    <Footer/>





    </div>
    
  );
}

export default Bookshelf;
