import React from "react";

const Badge = () => {
  return (
    <div className="badge relative">
      <img
        src="./src/resources/misc/deforestation.svg"
        alt=""
        className="rotate "
      />
      <img
        src="./src/resources/misc/hand.svg"
        alt=""
        className="absolute hand  top-0"
      />

      <img
        src="./src/resources/misc/high-five.svg"
        alt=""
        className="absolute top-0 high-five "
      />
    </div>
  );
};

export default Badge;
