import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";

const Cards = ({ name, price, cover, id, hover }) => {
  const [selectId, setId] = useState(0);

  console.log("id: ", selectId);
  return (
    <div className="px-1" key={name} onClick={(e) => setId(id)}>
      <div className="flex flex-col justify-evenly h-[500px] w-[300px] py-4 px-2 object-contain cursor-pointer">
        <div
          className={`h-[80%] w-[full] rounded-3xl overflow-hidden hover:border-4 hover:border-black transition-all card figure `}
        >
          <img
            src={cover}
            className={`object-cover h-[100%] w-full image-main`}
            key={id}
          />

          <img
            src={hover}
            className={`object-fit h-[100%] w-full image-hover`}
            key={nanoid}
          />
        </div>
        <div className="flex flex-col justify-between font-au font-semibold text-[20px] capitalize px-2 ">
          <div className="name">{name}</div>
          <div className="price">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
