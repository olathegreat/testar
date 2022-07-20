import React,{useState, useEffect, useContext} from 'react';
import Countdown from 'react-countdown';
import { ThemeContext } from '../Context';
import Dashboard from './Dashboard';
import Footer from './Footer';
import NavItems from './NavItems';



const Test = ({Questions}) => {
  const[questNum, setQuestNum]= useState(0);
  const[optionClick, setOptionClick] = useState("");
  const[score, setScore] = useState(0);
  const[display,setDisplay] = useState(false);
  const[promptDisplay,setPromptDisplay] = useState(true);
  const[finalScoreDisplay, setFinalScoreDisplay]=useState(false);
 




  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode;

  // checker styling for option click
  const[optionAclick, setOptionAclick]= useState(false);
  const[optionBclick, setOptionBclick]= useState(false);
  const[optionCclick, setOptionCclick]= useState(false);
  const[optionDclick, setOptionDclick]= useState(false);


  const submitFunction = () =>{
    setFinalScoreDisplay(true);
    setDisplay(false);
  }
  

  // const scoreAdder = () =>{
  //   Questions[questNum].Answer === optionClick ? setScore(score + 1): alert(optionClick);

  // }

  useEffect(() => {
    const scoreAdder = () =>{
      Questions[questNum].Answer === optionClick ? setScore(score + 1): setScore(score + 0);
  
    }
    scoreAdder();

    return ()=>{
      clearTimeout(scoreAdder);
    };
    
   
   },[optionClick]);

  const numberRender = Questions.map((item)=>{
    return(
      <div 
          onClick={()=>{
               setQuestNum(item.id - 1);
              
              }}
          style={{backgroundColor:"#62e5ff", 
              padding:"5px 10px", 
              borderRadius:"5px", 
              marginRight:"3px",
              cursor:"pointer"
              
              }}>
        {item.id}
      </div>
    )
  })
  return (
    <div>
       <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>

    <div className='prompt' style={{display: !promptDisplay && "none" , backgroundColor:"white"}}>
      <div className='promptQuestion' style={{color:darkMode&&"black"}}>
        <div className='popperquestion'><div className='question'> Are you ready to take the test </div></div>
       
        <h3>{Questions.length} questions in 10 mins</h3>
      </div>
      <div className='buttonPrompt'>
        <button onClick={()=>{
          setDisplay(true);
          setPromptDisplay(false);
        }
          
          }>Yes</button>
        <button><a href="/">No</a></button>

      </div>

    </div>







       <div className='question' style={{display: !display && "none"}}>
         <div className='container'>
           <div className='header-flex'>
             <div className='question-note'>
               Question {Questions[questNum].id} of {Questions.length}
             </div>
             <div className='time-countdown'>
               <Countdown date={Date.now() + 600000}><div>Time is up</div></Countdown>/10min
             </div>

             
           </div>


           <div className='question-display'>
             <div className='question'>
               <div className='mainQuestion'>{Questions[questNum].question}</div>
             </div>

             <div className='options'>
               <div className='full-option'  style={{color:optionAclick && "orange"}}>
                  A.  

                     <div className='option' onClick={(e)=>{
                       setOptionAclick(true);
                       setOptionBclick(false);
                       setOptionCclick(false);
                       setOptionDclick(false);
                       setOptionClick(e.target.textContent);
                       
                       }}>
                        {Questions[questNum].optionA}
                     </div>

               </div>
               

               <div className='full-option'  style={{color:optionBclick && "orange"}}>
                  B.  

                     <div className='option' onClick={(e)=>{
                        setOptionAclick(false);
                        setOptionBclick(true);
                        setOptionCclick(false);
                        setOptionDclick(false);
                        setOptionClick(e.target.textContent);
                       setOptionClick(e.target.textContent);
                       
                       }}>
                        {Questions[questNum].optionB}
                     </div>

               </div>


               <div className='full-option'  style={{color:optionCclick && "orange"}}>
                  C.  

                     <div className='option' onClick={(e)=>{
                        setOptionAclick(false);
                        setOptionBclick(false);
                        setOptionCclick(true);
                        setOptionDclick(false);
                        setOptionClick(e.target.textContent);
                       console.log(e.target.textContent)
                       setOptionClick(e.target.textContent);
                       
                       }}>
                        {Questions[questNum].optionC}
                     </div>

               </div>
               <div className='full-option'  style={{color:optionDclick && "orange"}}>
                  D. 

                     <div className='option' onClick={(e)=>{
                        setOptionAclick(false);
                        setOptionBclick(false);
                        setOptionCclick(false);
                        setOptionDclick(true);
                        setOptionClick(e.target.textContent);
                       console.log(e.target.textContent)
                       setOptionClick(e.target.textContent);
                       
                       }}>
                        {Questions[questNum].optionD}
                     </div>

               </div>
             </div>
           </div>
           <div className='question-navs'>
             <div className='prev-next'>

                   <button
                    style={{display:questNum<=0?"none":"inline-block"}}
                    onClick={(e)=>setQuestNum(questNum - 1)}>Prev</button>


                   <button
                    style={{display:questNum>=Questions.length-1?"none":"inline-block"}}
                   onClick={(e)=>{
                    setOptionAclick(false);
                    setOptionBclick(false);
                    setOptionCclick(false);
                    setOptionDclick(false);
                     setQuestNum(questNum + 1)}
                     }>Next</button>
             </div>
            
             <div className='submit'>
             <div className='submit'>
               <button onClick={()=>{
                 submitFunction();
                 
                 }}>Submit</button>
             </div> 
           
             </div>

            
           </div>

           <div className='numRender'>
               {numberRender}
             </div>
         </div>
       </div>
       <div style={{display: !finalScoreDisplay && "none"}}>
         <Dashboard score={score} totalQuestion={Questions.length}/>
       </div>


{/* 
       <div className='prompt' style={{display: !finalScoreDisplay && "none", 
        backgroundColor: darkMode? "#222" : "white",
        color: darkMode && "white"}}>

         <div className='result'  style={{backgroundColor: darkMode? "#222" : "white",
                    color: darkMode ?"white" :"black"}}>
            <div className='promptQuestion'>
                      <div className='popperquestion'><div className='question'> Your score is {score} </div></div>
       
               </div>
               <div className='buttonPrompt'>

                      <button><a href="/">Go to Home</a></button>
                      <button><Link to="/dashboard"> Go to Dashboard</Link></button>

               </div>
           </div>
               

    </div> */}
    <Footer/>
    </div>
  );
}

export default Test;
