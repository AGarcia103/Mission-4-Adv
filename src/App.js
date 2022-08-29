import React from "react";
import Navbar from "./HomeNavbar";
import HomeContent from "./HomeContent";
//import Footer from "./HomeFooter";


export default function Home() {
  return (
    
      <div>
        <Navbar />
        <HomeContent/>
       {/* <Footer/>*/}
      </div>
  );
}