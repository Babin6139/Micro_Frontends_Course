import React,{useState,useEffect} from "react";
import {login,useLoggedIn} from "./cart";

export default function Login(){
    const loggedIn=useLoggedIn();
    const [showLogin,setShowLogin]=useState(false);

    const [username,setUsername]=useState("sally");
    const [password,setPassword]= useState("123");

    if(loggedIn) return null;
    return (
        <>
            <span onClick={()=>setShowLogin(!showLogin)}>
                <i className="ri-fingerprint-line text-2xl" id="login"></i>
            </span>
            {showLogin && (
                <div className="absolute p-5 border-4 border-blue-800 bg-white"
                    style={{
                        width:300,
                        top:"2rem",
                        left:-250
                    }}
                >
                    <input 
                        type="text" 
                        placeholder="User name"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        className="border text-sm text-black border-gray-300 p-2 rounded-md w-full" 
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="border text-sm text-black border-gray-300 p-2 rounded-md w-full" 
                    />
                    <button
                        className="bg-green-900 text-white py-2 px-5 rounded-md "
                        onClick={()=>login(username,password)}
                        id="loginbtn"
                    >
                        Login
                    </button>
                </div>
            )}
        </>
    );
}