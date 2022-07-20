import React,{useState} from 'react';
import portrait from "./img/portrait.png";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"


const Dashboard = ({totalQuestion, score}) => {
   const percentage = Math.floor((score/totalQuestion) * 100);
   const [remarkChecker,setRemarkChecker]=useState(false)
  return (
    <div className='dashboard'>
         <nav class="navbar sticky-top  flex-md-nowrap p-0">
                  <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Hi, there</a>

           <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                         <a class="nav-link" href="/">Go to Home</a>
                </li>
           </ul>
       </nav>



       
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block  sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">

            <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  <img src={portrait} alt=''/>
                </a>
              </li>


              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Messages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <span data-feather="shopping-cart"></span>
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sign">
                  <span data-feather="users"></span>
                  Log in
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sign">
                  <span data-feather="bar-chart-2"></span>
                  Sign ups
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <span data-feather="layers"></span>
                  Drop comments
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>

                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              {/* <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div> */}
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

        

          {/* <h2>Sign in details</h2> */}
          <div class="table-responsive">


            <div className='progressContainer'>
              
                  
                      <div className="circles" style={{width:"300px",height:"300px"}}>

                        
                            <CircularProgressbarWithChildren value={percentage}
                              styles={buildStyles({
                                rotation:0,
                                strokeLinecap:"butt",
                                textSize:"auto",
                                text:{
                                  fill:"#f88"
                                }
                              })}
                            
                            
                            >

                              < div style={{fontSize:12, marginTop:-5}}>
                              
                                <div className='result' style={{fontSize:'18px'}}>Last testscore<br/>
                                
                                       <span className="bigger">{score}/{totalQuestion}</span>
                                </div>
                              </div>
                            </CircularProgressbarWithChildren>
                      </div>



                      <div  className="circles" style={{width:"300px",height:"300px"}}>

                        
                            <CircularProgressbarWithChildren value={percentage}
                              styles={buildStyles({
                                rotation:0,
                                strokeLinecap:"round",
                                textSize:"16px",
                                text:{
                                  fill:"#f88",
                              
                                },
                                pathColor: "rgb(239,129, 89)",
                              })}
                            
                            
                            >

                              < div style={{fontSize:12, marginTop:-5}}>
                              <div className='result' style={{fontSize:'18px'}}>Last percentage<br/>
                                
                                    <span className="bigger">{percentage}%</span>
                              </div>
                              </div>
                            </CircularProgressbarWithChildren>
                      </div>


                      <div className='circles' style={{width:"300px",height:"300px"}}>

                        
                            <CircularProgressbarWithChildren value={percentage}
                              styles={buildStyles({
                                rotation:0,
                                strokeLinecap:"butt",
                                textSize:"16px",
                                text:{
                                  fill:"#f88"
                                },
                                pathColor: "cyan",
                              })}
                            
                            
                            >

                              < div style={{fontSize:12, marginTop:-5}}>
                                  <div className='result' style={{fontSize:'18px'}}>Avg. testscore<br/>
                                
                                         <span className="bigger">{percentage}%</span>
                                  </div>
                              </div>
                            </CircularProgressbarWithChildren>
                      </div>
            </div>

            <div className='finalEvaluation'>
              <div className='numTestTaken'>
                         <div className='result' style={{fontSize:'18px'}}> No. of Test: 
                                
                                <span className="bigger">1</span>
                         </div>
              </div>
              <div className='resultRemark'>
                         <div className='result' style={{fontSize:'18px'}}>Remark:
                                
                                <span style={{display:percentage>69 && percentage<101 ?"inline-block":"none"}} className="bigger">Excellent</span>
                                <span style={{display:percentage>59 && percentage<70 ?"inline-block":"none"}} className="bigger">Very Good</span>
                                <span style={{display:percentage>49 && percentage<60 ?"inline-block":"none"}} className="bigger">Average</span>
                                <span style={{display:percentage>39 && percentage<50 ?"inline-block":"none"}} className="bigger">Fair Result</span>
                                <span style={{display:percentage<39?"inline-block":"none", color:"Red"}} className="bigger">Bad result</span>
                         </div>
              </div>
            </div>


            <div className='advice'>
              <h3>
                Advice
              </h3>
              <div className='advice-content'>
                
                You have done a great job! but you can improve by reading more.
              
              
               
              </div>
              <div className='bookshelflink'> <a href='/bookshelf'>Check out our Bookshelf</a></div>
            </div>
            
              
             
          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
