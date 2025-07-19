import axios from "axios";
import "./header.css";
import {useState,useEffect, use} from "react";
import { Link,Navigate } from "react-router-dom";
import { useRef } from "react";


export const Header=()=>{

    const [productdata,setproductdata] = ([]);
    const scroll = useRef(null)

    // useEffect(()=>{
    //         axios.get("http://127.0.0.1:5050/products/24")
    //         .then(res=>{
    //             console.log(res.data)
    //         });
    // },[])

    // function exploremenuclick(e){
    //     e.target.setAttribute(className="active");
    // }

    function viewMenuclick(){
        window.scrollTo({ top: 850, behavior:"smooth" });
    }

    return(
        <div className="main-header">
            <div className="header-content">
                <span style={{display:"flex", justifyContent:"center"}}><img src="/ast/lg.png"  width="400px" height="300px"/> </span>
                {/* <div className="heading">  <h2> VIJAYA LAXMI FOOD COURT</h2> </div> */}
                <p>Your Hunger, Our Priority - Let's Serve!</p>
                <p><span><img src="/ast/phone.svg" alt="" width="20px"/> </span><span><a href="tel:9032785569">9032785569</a> - </span> <span> <a href="tel:7013382707">7013382707</a></span></p>
                {/* <button onClick={viewMenuclick}> View Menu </button> */}
            </div>
        </div>

    )
}