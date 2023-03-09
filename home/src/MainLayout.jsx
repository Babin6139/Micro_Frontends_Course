import React,{Suspense,useState} from "react";
import ReactDOM from "react-dom";

// const Header=React.lazy(()=>import ("home/Header"));
import Footer from "home/Footer";
import Header from "home/Header";
import "remixicon/fonts/remixicon.css"

import "./index.scss";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

import {Route,BrowserRouter as Router,Routes} from "react-router-dom"


export default function MainLayout(){
    return(
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header/>
      <div className="py-10">
        <Routes>
        <Route exact path="/" element={<HomeContent/>}/>
          <Route path="/product/:id" element={<PDPContent/>}/>
          <Route path="/cart" element={<CartContent/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
)}
