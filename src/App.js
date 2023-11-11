import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Searching from "./components/Searching";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div>
    <Navbar />
    <section id='Hero'>
      <Hero />
    </section>
    <section id='Destination'>
      <Destination />
    </section>
    <section id='Booking'>
      <Searching />
    </section>
    <section id='Travel'>
      <Selects />
    </section>
    <section id='View'>
      <Carousel />
    </section>
    <Footer />
  </div>
    
  );
}

export default App;

