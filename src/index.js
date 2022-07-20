import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./Component/App"
import {ThemeProvider} from "./Context"




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider>
           <App/>
        </ThemeProvider>
       
        </BrowserRouter>
    </React.StrictMode>
     , document.querySelector("#root")
);