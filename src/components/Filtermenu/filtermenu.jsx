import "./filtermenu.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

import { useContext } from "react";
import { MyContext } from "../ContextMenu/context";
import { food_list } from "../../assets/frontend_assets/assets";


export function Filtermenu() {
  const [data, setData] = useState([]);
  const [itemCounts, setItemCounts] = useState({});

  const { cat } = useParams();


  // useEffect(() => {
  //   if (cat === undefined) {
  //     axios.get("http://127.0.0.1:5050/products")
  //       .then(res => {
  //         setData(res.data);
  //       });
  //   } else {
  //     axios.get(`http://127.0.0.1:5050/products/${cat}`)
  //       .then(res => {
  //         setData(res.data);
  //       });
  //   }
  // }, [cat]);

  if (cat == undefined) {

    return (
      <div className="header">
        <h2 className="cat-name" style={{ color: "gray" }}>Top dishes</h2>

        <div className="items">
          {food_list.map((item, index) => (
            <div key={index} className="item-box">
              <div className="box-image">
                <img src={item.image} width="200px" alt="not found" />
              </div>

              <span className="box-name">
                <div className="item-name">{item.name}</div>
                {/* <p className="item-description">{item.description}</p> */}
                <div className="item-price"> <b>Single </b> ₹ {item.price}</div>

                {item.Fullprice && (
                <div className="item-price"> <b>Full </b> ₹ {item.Fullprice}</div>
                )}

              </span>

            </div>
          ))}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="header">
        <h2 className="cat-name" style={{ color: "gray" }}>{cat}</h2>
        <div className="items">
          {
            food_list
              .filter(item => item.category === cat)
              .map((selecteCatItem, index) => (
                <div key={index} className="item-box">


                  <span className="box-image">
                    <img src={selecteCatItem.image} width="200px" alt="not found" />
                  </span>

                  {/* Item name */}
                  <span className="box-names">
                    <div className="item-name">{selecteCatItem.name}</div>
                    <p className="item-description">{selecteCatItem.description}</p>
                    
                  <div className="item-price"> <b>Single </b> ₹ {selecteCatItem.price}</div>

                {selecteCatItem.Fullprice && (
                <div className="item-price"> <b>Full </b> ₹ {selecteCatItem.Fullprice}</div>
                )}

                  </span>

                  {/* item itmage */}
                  

                </div>
              ))
          }
        </div>
      </div>
    );
  }


}
