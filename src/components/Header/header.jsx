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
        <div className="main-header" >
            <div className="header-content">
                <h2>VIJAYA LAXMI FOOD COURT</h2>
                <p>"Your Hunger, Our Priority - Let's Serve!"</p>
                <p><span><img src="/ast/phone.svg" alt="" width="15px"/></span><span>9032785569 - </span> <span> 7013382707</span></p>
                {/* <button onClick={viewMenuclick}> View Menu </button> */}
            </div>
        </div>

    )
}