import React from "react";
import { products, symbols } from "../assets";
import Cards from "./Cards";

const Hero = () => {
  const text =
    "FIGMA'S COLLECTION OF LAYERS AND COMPONENTS FOR YOU AND YOUR FRIENDS";

  const words = text.split(" ");
  let line = [];
  for (let i = 0; i < words.length; i++) {
    line.push(words[i]);
    line.push(<img src={symbols[i]} className="mx-2" />);
  }

  return (
    <div>
      <div className="headers text-black font-au p-8 mx-4 text-center my-6 flex flex-wrap">
        <h1 className="flex flex-wrap items-center justify-center">{line}</h1>
      </div>
      <main className=" h-full py-[100px] px-6  flex flex-col justify-between my-8">
        <div className="flex-container flex flex-wrap items-center justify-center py-4 ">
          {products.map((p, i) => {
            const { name, cover, price, hover } = p;
            return (
              <Cards
                name={name}
                cover={cover}
                price={price}
                id={i}
                hover={hover}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Hero;

// <div>
//
// </div>
