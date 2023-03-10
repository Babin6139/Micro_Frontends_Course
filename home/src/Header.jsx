import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import {Link} from "react-router-dom";
export default function Header(){
    return <div className="p-5 bg-blue-300 text-white text-3xl font-bold ">
       <div className="flex">
            <div className="flex-grow flex">
                <Link to="/">Fidget Spinner World</Link>
                <div className="mx-5">|</div>
                <Link to="/cart" id="cart">Cart</Link>
            </div>
            <div className="flex-end relative">
                <MiniCart></MiniCart>
                <Login></Login>
            </div>
       </div>
    </div>
}