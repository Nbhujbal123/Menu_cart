import "./cart.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { isSession, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../components/ContextMenu/context";
export const Cart = () => {

    const cartt = useContext(MyContext)

    const [cartdata, setcartdata] = useState([]);




    useEffect(() => {
        async function main() {
            async function getcart(id, count) {
                try {
                    const res = await axios.get(`http://127.0.0.1:5050/cart/${id}`);
                    const itemWithCount = { ...res.data, count }; // add count
                    setcartdata(prev => [...prev, itemWithCount]);
                } catch (error) {
                    console.error("Failed to fetch cart:", error);
                }
            }

            if (!cartt.value || cartt.value.length === 0 || cartt.value[0] === undefined) {
                console.log("No data found");
                return;
            }

            setcartdata([]); // Clear existing data before fetching

            for (let i = 0; i < cartt.value.length; i++) {
                await getcart(cartt.value[i].id, cartt.value[i].count);
            }
            //   console.log(cartdata);
        }

        main();
    }, [cartt]);

    useEffect(() => {
        console.log(cartdata);
    }, [cartdata])

    if (cartdata.length == 0) {
        return (
            <div className="cart-body">
                <h3>Cart is Empity</h3>
            </div>
        )
    }
    else {
        return (
            <div className="cart-body">
                <h2>cart contenr</h2>

                {cartdata.map((item, index) => (
                    <div key={index} className="cart">
                        
                        {/* {console.log("Category:", item.category)} */}
                        <img src={`/ast/${item.image}.png`} alt="not found" width="50px"/>
                        <div className="name">{item.name} </div>
                        <div className="price">{item.price} </div>
                        <div className="category">{item.category} </div>
                        <div className="count"> {item.count} </div>          
                    </div>
                ))}

            </div>
        )
    }


}