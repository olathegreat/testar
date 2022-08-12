import React,{useContext, useState, useRef}from "react";
import hero from "./img/hero.png";
import holdphone from "./img/holdphone.png"
import "../regular/icofont.css"
import "./Style.css"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context';
import bell from "./img/alert.png"
import emailjs from 'emailjs-com';
import Footer from "./Footer";
import NavItems from "./NavItems";

const Homepage = () => {

  const formRef = useRef();
  const[done, setDone]=useState(false)

  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode;
  const [input, setInput]= useState("");



  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm(
        'service_em09kmb',
         'template_4yb9gok',
           formRef.current,
          'LmJhOAGJD8Jd_n-Wk')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });

}

  return (
   
  <div>
               <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>




    <div className='jumbotron' style={{  backgroundColor: darkMode? "#222" : "#62e5ff",color: darkMode && "white"}}>
      
     
      <div className='container'>
 
        <div className='row'>
               <div className='homeDesc col-sm-6'>
                     <h1>Get Tested <span className="orange">Today!</span></h1>
                     <div className='descContent'>
                       Take our general knowledge test to evaluate
                       your intelligence on wider range of fields
                       like politics,academics , business, etc.
                     </div>
                    
                       <br/>
                       <Link to="/test">Take Assessment</Link>

                 </div>
                 <div className='col-sm-6 img-right'>
                    <img src={hero} alt=""/>
                 </div>
        
             </div>
      </div> 
    </div>

    {/* about section */}


    <div className='about'>
        <div className='container' style={{  backgroundColor: darkMode? "white" : "white",color: darkMode && "black"}}>
           <h2>About</h2>
            <div className='row'>
                      <div className=' col-sm-6' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <img src={holdphone} alt=""/>
                      </div>

                  <div className='col-sm-6 aboutright'>
                    
                          <div className='aboutDesc'>
                            Testar is an assessment platform built to give
                            you an overview of your understanding and clarity in the general knowledge field.
                            It is properly incorporated with sections and features where you can 
                            learn, read books, explore the internet by reading latest news.
                            It  also has a Dashboard that allows you to keep track of your 
                            test progress and records.
                          </div>
                  </div>
            </div>
         </div>
    </div>



      {/* features section */}


      <div className='about dont'  style={{  backgroundColor: darkMode? "#c5c8c9" : "#92f2ff",color: darkMode && "black"}}>
          <div className='container'>
           <h2><span style={{color:"#222"}}>Don't </span>miss out</h2>
            <div className='row'>
             
              <div className='col-sm-6 aboutright'>
                
                <div className='aboutDesc'>
                  To enable our users learn at ease with less pressure, 
                  we have sub divided general knowledge to weekly bits. 
                  Our weekly news letter is properly curated by our 
                  team of industry and educational expert to meet a yearly 
                  goal of tremendous development 
                </div>
                
                <form>
                  <div className="form-group">
                      <label>Suscribe to our newsletter Now!</label>
                      <input className="form-control" type="email" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="enter your email"/>
                      <button onclick="">Suscribe</button>
                  </div>
              

                </form>
              </div>
              <div className='col-sm-6'>
                <img src={bell} alt="" style={{width:"100%"}}/>
              </div>
            </div>
          </div>



          
    </div>





     {/* feedback section */}


     <div className='about dont feedback'  style={{  backgroundColor: darkMode? "white" : "white",color: darkMode && "black"}}>
          <div className='container'>
           <h2><span style={{color:"#222"}}>Drop us a</span> Feedback</h2>
            <div className='row'>
             
             
              <div className='col-sm-12 col-md-6 aboutright'>

                
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input className="form-control" type="text" name="user_name" required placeholder=""/>

                  </div>

                  <div className="form-group">
                      <label>Email</label>
                      <input className="form-control"name="user_email" type="email" required  placeholder=""/>

                  </div>

                  <div className="form-group" required>
                      <label>Subject</label>
                      <input className="form-control" type="text" name="user_subject"  placeholder=""/>

                  </div>
                  <div className="form-group" >
                      <label>Message</label>
                      <textarea required spellCheck className="form-control" type="text" name="user_message" placeholder=""/>

                  </div>
              
                  <button onclick="">Send</button>

                  {done && 'thank you'}
                </form>
              </div>

              <div className="col-sm-12 col-md-6 left">
                <h3>You can also reach us on:</h3>
                <div><i className='icofont-email'></i>ademolarotimi2000@gmail.com</div>
                <div><i className='icofont-phone'></i>+123 456 213</div>
                <div><i className='icofont-institution'></i>no.9 ikoyi lagos</div>

              </div>
            </div>
          </div>



          
    </div>
    <Footer/>
    



  </div>  
  );
}

export default Homepage;
