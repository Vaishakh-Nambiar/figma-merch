import React from "react";
import Carousel from "./Carousel";
import { sliderImg } from "../assets";
import Badge from "./badge";

const Slider = () => {
  const images = sliderImg.map((s, i) => {
    const { title, img } = s;
    return (
      <div className="figure">
        <img
          src={img}
          key={i}
          className={`item w-[100%] h-[100%]  cursor-grabbing image-main `}
        />
        <div className="flex items-center justify-center image-hover-title p-4  bg-white z-30 cursor-pointer text-black ">
          <span className="bg-white text-[40px] px-6 py-4 rounded-full font-au font-semibold uppercase border-solid border-black border-4 flex items-center justify-center sflex-wrap">
            {title}
          </span>
        </div>
      </div>
    );
  });

  const setting = {
    dragSpeed: 1.25,
    itemWidth: 550,
    itemHeight: 550,
    itemSideOffsets: 15,
  };

  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };

  return (
    <main className="py-4 bg-yellow relative ">
      <div className="container h-[90%] overflow-x-hidden  ">
        <Carousel _data={images} {...setting}>
          {images.map((i, _i) => (
            <div key={_i} className="item " style={{ ...itemStyle }}>
              <div className="">{i}</div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute right-[15%] -bottom-20 ">
        <Badge />
      </div>
    </main>
  );
};

export default Slider;
