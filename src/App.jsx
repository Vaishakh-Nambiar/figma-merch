import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App w-full h-full overflow-x-hidden">
      <div className="parent outline flex flex-col w-full">
        <Nav />
        <section className="bg-yellow border">
          <Slider />
        </section>
        <Hero />
        <Footer />
      </div>
    </main>
  );
}

export default App;
