import React,{Suspense,useState} from "react";
import ReactDOM from "react-dom";

// const Header=React.lazy(()=>import ("home/Header"));
import Footer from "home/Footer";
import Header from "home/Header";
import "remixicon/fonts/remixicon.css"

import "./index.scss";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom"

// const App = () => {
//   const [showHeader,setShowHeader]=useState(false);
//   return(
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     {showHeader&&<Suspense fallback={<div>Loading ...</div>}>
//       <Header/>
//     </Suspense>}
//     <button onClick={()=>setShowHeader(true)} className="text-3xl p-5">Show Header</button>
//     <div className="py-10">
//       PDP Page Content
//     </div>
//     <Footer/>
//   </div>
// );}

const App=()=>(
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header/>
      <div className="py-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
)
ReactDOM.render(<App />, document.getElementById("app"));
