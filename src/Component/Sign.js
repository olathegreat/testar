import React,{useState} from 'react';
import NavItems from './NavItems';
import Footer from './Footer';

const Sign = () => {

  const [checker, setChecker] = useState(false);
  const checkerSet = (e) =>{
    e.preventDefault();
    setChecker(true);
  }
  const checkerSet2 =(e)=>{
    e.preventDefault();
    setChecker(false);
  }
  return (
    <div>
       <nav id="nav">
                       
                      
                       <NavItems/>
                </nav>




                <div className='sign'>
      <div className='signup' style={{display:checker&&"none"}}>
      <h3>Sign Up Form</h3>
        <form className='form'>
         
          <div className='form-group row'>
            <label className='col-md-2'>Firstname</label>
            <input className='form-control'required type="text"/>
          </div>

          <div className='form-group row'>
            <label className='col-md-2'>Lastname</label>
            <input className='form-control' required type="text"/>
          </div>

           <div className='form-group row'>
            <label className='col-md-2'>Email</label>
            <input className='form-control' type="email"/>
          </div>

          <div className='form-group row'>
            <label className='col-md-2'>Phone</label>
            <input className='form-control' type="number"/>
          </div>

          <div className='form-group row'>
            <label className='col-md-2'>Password </label>
            <input className='form-control' required type="text" secret min="6"/>
          </div>

          <div className='form-group row'>
            <label >Confirm Password</label>
            <input className='form-control'required secret type="text" min="6"/>
          </div>
          <button>Submit</button>


          <div>
            Do you have an acount?<button style={{border:"none",background:"none", color:"#0b9de0"}} onClick={checkerSet}>Sign in</button>
          </div>
        </form>
      </div>





      <div className='signin' style={{display:!checker&&"none", height:"80vh"}}>
        
        <h3>Sign In </h3>
        <form>

         
        <div className='form-group row'>
            <label className='col-md-2'>Email</label>
            <input className='form-control' required type="text"/>
          </div>


          <div className='form-group row'>
            <label className='col-md-2' >Password</label>
            <input className='form-control' required type="text"/>
          </div>


          <button>Sign In</button>
         

          <div>
            You dont have an account?<button style={{border:"none",background:"none", color:"#0b9de0"}} onClick={checkerSet2}>Sign Up</button>
          </div>



        </form>
         


      </div>
    </div>
    

    <Footer/>



    </div>
   
  );
}

export default Sign;
