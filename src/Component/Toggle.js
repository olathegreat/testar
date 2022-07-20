import React from 'react';
import "../regular/icofont.css";
import "./Toggle.css"
import { useContext } from 'react';
import { ThemeContext } from '../Context';


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick =()=>{
        theme.dispatch({type:"TOGGLE"})

    }
  return (
    <div className='t'>
      <i className='icofont-adjust day'></i>
      <i className='icofont-moon night'></i>
      <button className='t-button'style={{left:theme.state.darkmode ? 0: 25}} onClick={handleClick}></button>
    </div>
  );
}

export default Toggle;
