import React, { useState } from "react";
import Nav from "./Nav";
import Buttons from "./Buttons";
import { products } from "../assets";
// import "../App.css";

const Page = ({ obj }) => {
  const sizes = ["xs", "s", "m", "l", "xl", "2xl"];

  const { type, name, images, info, extras, price } = products[0];
  //   const { type, name, images, info, extras, price } = obj;

  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  const [details, setDetails] = useState();

  function selectImg(id) {
    setActiveImg(id);
    console.log(id);
  }

  return (
    <main className="min-h-screen font-au">
      <div className="w-screen">
        <Nav />
      </div>
      <section className="outline-red p-8  flex ">
        <div className="image-section basis-1/2 outline-red flex justify-center">
          <div className="img-gal outline-red p-6 flex flex-col items-center justify-start">
            {images.map((image, i) => {
              return (
                <div
                  className={`ot-bl my-2 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer img-click ${
                    activeImg === i ? `outline` : `outline-none`
                  }`}
                  onClick={() => selectImg(i)}
                >
                  <img
                    src={image}
                    key={i}
                    className=" h-[90px] w-[90px] object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="img-disp basis-3/4 p-6 ">
            <div className="rounded-[100px] outline-red overflow-hidden h-[100%] flex items-center justify-center ">
              <img
                src={images[activeImg]}
                alt=""
                className="outline-red h-full"
              />
            </div>
          </div>
        </div>

        <div className="product-info outline-red p-4 basis-1/2 min-h-screen flex flex-col  ">
          <div className="h-[75%] ot-bl flex flex-col justify-evenly">
            <div className="mx-2">
              <div
                className={`type outline-red px-4 py-1 uppercase text-[20px] font-semibold rounded-full ${
                  type === "layers" ? `bg-green` : `bg-yellow`
                } border-solid border-black border-2 w-fit`}
              >
                {type}
              </div>
            </div>
            <h1 className="name outline-red p-2 capitalize">{name}</h1>
            <div className="size-range outline-red p-2 flex">
              {type === "layers" &&
                sizes.map((s, i) => {
                  return (
                    <div className="">
                      <div
                        className="rounded-full h-[50px] w-[50px] text-center flex items-center justify-center  text-black border-black border-2 border-solid mx-2 p-4 uppercase font-semibold text-[18px] btn"
                        key={`_${i}`}
                      >
                        {s}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="counter outline-red p-4 flex items-center w-max justify-between">
              <div
                className="rounded-full h-[60px] w-[60px] p-4 flex items-center justify-center border-2 border-black border-solid text-[24px] btn"
                onClick={() => {
                  setCount((prev) => (prev > 1 ? prev - 1 : 1));
                }}
              >
                -
              </div>
              <div className="count mx-4 text-[24px] px-4">{count}</div>
              <div
                className="rounded-full h-[60px] w-[60px] p-4 flex items-center justify-center border-2 border-black border-solid text-[24px] btn"
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                +
              </div>
            </div>
            <div className="price w-full">
              <div className="p-4 text-[24px] border-black border-2 border-solid flex items-center justify-center rounded-full btn">
                <span className="mx-2">ADD</span>${price * count}
              </div>
            </div>
            <p className="outline-red text-[24px] py-4 mx-2">{info}</p>
            <p className="outline-red italic font-medium text-[18px] mx-2">
              {extras}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
