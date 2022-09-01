import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
  const value = useContext(ThemeContext);

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
      {/* <Cart /> */}
      {/* <About /> */}
    </main>
  );
}

export default App;
