import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  return (
    <main className="App w-full h-full overflow-x-hidden">
      <div className="parent outline flex flex-col w-full bg-yellow">
        <Nav />
      </div>
      <section className="bg-yellow border ">
        <Slider />
      </section>
      <Hero />
      <Footer />
      {/* <Page /> */}
    </main>
  );
}

export default App;
