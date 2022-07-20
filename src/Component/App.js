import React,{useContext}from "react";
import Dashboard from "./Dashboard";
import Bookshelf from "./Bookshelf";
import Explore from "./Explore";
import Sign from "./Sign";
import Error from "./Error";
import Questions from "./Questions";
import Test from "./Test";
import Home from "./Home";
import {Routes, Route } from "react-router-dom";
import NavItems from "./NavItems";
import Toggle from './Toggle';
import { ThemeContext } from '../Context';
import "./Style.css";
import Footer from "./Footer";
import BookData from "./BookData";


const App = () => {


  const theme =useContext(ThemeContext);
  const darkMode= theme.state.darkmode;
  return (
    <div className="ui segment"  style={{ 
      backgroundColor: darkMode? "#222" : "white",
      color: darkMode && "white"}}>
              
                    <Routes className="routes">
                        <Route path="/" index element={<Home/>}/>
                        <Route path="/bookshelf" element={<Bookshelf bookData={BookData}/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/sign" element={<Sign/>}/>
                        <Route path="/test" element={<Test Questions={Questions}/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                    <Toggle/>
                    
                    
    </div>
  );
}

export default App;

