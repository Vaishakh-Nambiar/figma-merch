import React, { useEffect, useState, useContext } from "react";
import { products, symbols } from "../assets";
import Nav from "./Nav";
import Footer from "./Footer";
import Table from "./Table";
import Buttons from "./Buttons";

import ThemeContext from "../themeContext";

const Cart = ({ obj }) => {
  const value = useContext(ThemeContext);
  console.log(value);

  // const item=[products[3],products[0]]

  const [items, setItems] = useState([products[3]]);

  const { name, hover, price } = products[3];
  const [count, setCount] = useState(1);
  const [finalTotal, setBill] = useState(0);

  useEffect(() => {
    setBill(count * price);
  }, [count]);

  return (
    <div className="w-screen">
      <div className="parent  flex flex-col w-full ">
        <Nav />
      </div>
      <main className="h-screen flex flex-col my-6 text-black font-au p-6 text-left">
        <div className=" px-12 mx-10">
          <div className="itemCount text-[32px] font-semibold py-6 px-2">
            {items.length} items in Cart
          </div>
          <Table
            items={items}
            count={count}
            setCount={setCount}
            setBill={setBill}
          />

          <div className="bill flex items-end flex-col p-6 text-[32px] my-6">
            <div className="total">
              <span className="px-6">Total *</span>
              <span className="font-semibold">${finalTotal}</span>
            </div>
          </div>
          <div className="w-full  flex justify-end my-4">
            <div className="w-fit place-items-end">
              <Buttons value={"checkout"} />
            </div>
          </div>
          <div className=" flex justify-end">
            <span className="capitalize ">
              *taxes and shipping collected at checkout
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
