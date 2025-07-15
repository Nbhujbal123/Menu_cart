import "./menu.css"
import { menu_list } from "../../assets/frontend_assets/assets";
// import {Link,useParams} form "react-router-dom"
import { Link ,useParams } from "react-router-dom";
import { Filtermenu } from "../Filtermenu/filtermenu";
import { useRef } from "react";


export function ExploreMenu() {
    const scrollRef = useRef(null);  // Step 1: Create a ref

    function prevclick() {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    }

    function nextclick() {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }

    return (
        <div className="explore-menu">
            <h1>Explore Menu</h1>
            {/* <p>Explore our menu with delicious dishes.</p> */}

            <div className="explore-menu-wrapper"> {/* wrapper for styling controls and scrollable area */}
                <img onClick={prevclick} className="navbtn" id="left" src="/ast/prev.svg" height="30px" />

                <div className="explore-menu-list" ref={scrollRef}> {/* Step 2: Attach ref */}
                    {
                        menu_list.map((item, index) => (
                            <div key={index} className="explore-menu-list-items">
                                <Link to={`/${item.menu_name}`}>
                                    <img src={item.menu_image} alt="not found" />
                                    <div className="menu-names">{item.menu_name}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <img onClick={nextclick} className="navbtn" id="right" src="/ast/next.svg" height="30px" />
            </div>

            {/* <div className="hrparent">
                <hr className="horizantalLine"/>
            </div> */}  
            <Filtermenu />
        </div>
    );
}
