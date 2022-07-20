import React,{useState,useEffect} from 'react';
import NavItems from './NavItems';
import Footer from './Footer';
import axios from 'axios';

// api key b2e0fb0d89d54c15979393728eec310d
const Explore = () => {
  const[term, setTerm] = useState("");
  const[result, setResult] = useState([]);
  const[dispHeight, setDispHeight]=useState("85vh");



          
                

  useEffect(() => {
    const search = async(term)=>{
      const response = await axios.get(`http://newsapi.org/v2/everything?q=${term}&language=en&apiKey=b2e0fb0d89d54c15979393728eec310d`);
      setResult(response.data.articles);
    }
    setDispHeight("auto");

    if(term &&!result.length){
      search();
    }else{

     const timeOutid = setTimeout(() => {
       if(term){
         search();
        }
      }, 1000);
        
      return ()=>{
         clearTimeout(timeOutid);
      };
      

    }
   
    
   
   },[term]);

 

 const Renderresult = result.map((item)=>{
   return(
     <div className='col-sm-4 card'>
       <img src={item.urlToImage} alt={item.id}/>
       <div><a href={item.url}>{item.title}</a></div>
       <div >{item.description}</div>
     </div>
   )
 })



  return (
    <div>
       <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>




                <div className='explore' style={{height:dispHeight}}>
      <div className='ui form'>
          <div className='field'>
            <div className='form-group'>
                 
            <label>Enter search term:</label>
              <input 
              className="form form-control"
                  value={term}
                   onChange={(e)=>{setTerm(e.target.value);console.log(term)}} 
                   type="text"/>



            </div>
              
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            {Renderresult}
          </div>
        </div>
    </div>



    <Footer/>


    </div>
    
  );
}

export default Explore;
