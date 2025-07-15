import React from "react";
import "./navbar.css";
import {useState} from "react";
import {assets} from "../../assets/frontend_assets/assets";
import { Link,Navigate } from "react-router-dom";

export const Navbar = ()=>{

    const [menu,setmenu] = useState("home");

    return(
        <div className="navbar">
           {/* <img src={assets.logo} className="logo" width="120px" height="60px" /> */}

          

          
        </div>   

        
    )
}