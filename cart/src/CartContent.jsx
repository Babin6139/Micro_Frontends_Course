import React,{useState,useEffect} from "react";
import {login,jwt} from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";
export default function CartContent(){
    const [token,setToken]=useState("");

    useEffect(()=>{
        return jwt.subscribe((value)=>setToken(value ?? ""));
    },[])

    return (<div>
        <div>JWT:{token}</div>
        <Login/>
        <MiniCart/>
    </div>
)}