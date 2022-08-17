import React from "react";

const Buttons = ({ value }) => {
  return (
    <div className="py-1 px-5 rounded-full border-solid border-black border-[3px] mx-2 text-[15px] bg-transparent uppercase font-semibold cursor-pointer hover:bg-black hover:text-white transition ">
      {value}
    </div>
  );
};

export default Buttons;
