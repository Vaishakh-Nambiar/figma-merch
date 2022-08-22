import React, { useState } from "react";
import { products } from "../assets";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Table = ({ items, count, setCount, setBill }) => {
  function deleteFromList() {
    console.log("deleted");
  }
  return (
    <div className="">
      <div className="">
        <table id="customers ">
          <tr className="outline-red text-[32px] ">
            <th className="outline-red w-2/4 ">Item</th>
            <th className="outline-red w-1/4 ">Price</th>
            <th className="outline-red w-1/4 ">Qty</th>
            <th className="outline-red w-1/4 ">Subtotal</th>
          </tr>
          {items.map((item, i) => {
            const { name, hover, price } = item;

            let finalPrice = count * price;

            return (
              <tr className="outline-red " key={`_${i}`}>
                <th className="outline-red flex items-center justify-start text-[24px] itemCart">
                  <div
                    className="p-2 mr-4 deleteBtn outline-red"
                    onClick={deleteFromList}
                  >
                    <AiOutlineCloseCircle />
                  </div>

                  <div className="flex items-center justify-start">
                    <div
                      className={`ot-bl my-2 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer img-click `}
                    >
                      <img
                        src={hover}
                        className=" h-[150px] w-[150px] object-cover"
                      />
                    </div>
                    <div className="capitalize mx-6 flex flex-col outline-red">
                      <span>{name}</span>
                      <span className="text-[18px]">size</span>
                    </div>
                  </div>
                </th>

                <th className="price outline-red text-[24px]">${price}</th>

                <th className="counter outline-red">
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
                </th>

                <th className="outline-red text-[24px]">${finalPrice}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
