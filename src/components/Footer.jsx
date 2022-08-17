import React from "react";
import { symbols, footer } from "../assets";

const Footer = () => {
  const words = "Figma's marvelously considered collection of objects".split(
    " "
  );
  let line = [];
  for (let i = 0; i < symbols.length; i++) {
    line.push(words[i]);
    line.push(<img src={symbols[i]} className="mx-2 brightness-200" />);
  }

  return (
    <footer className="bg-yellow text-black font-au px-6  max-w-full">
      <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
          <a
            className="inline-block p-2 text-black bg-yellow border-solid border-2 border-black rounded-full shadow sm:p-3 lg:p-4  hover:bg-black hover:text-white transition"
            href="#"
          >
            <span className="sr-only">Back to top</span>^
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="p-4">
            <div className="flex justify-center lg:justify-start"></div>

            <img
              src="src/resources/misc/logo-full.static.svg"
              alt=""
              // classNameName="outline"
            />
            <p className="uppercase text-[20px] my-4 font-semibold">
              Objects that inspire
            </p>
          </div>

          <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
            <h2 className="sr-only" id="footer-navigation">
              Footer navigation
            </h2>

            <ul className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12 font-au text-[24px]">
              {footer.map((f, i) => {
                const { title, link } = f;
                return (
                  <li key={i}>
                    <a
                      className="text-black transition hover:text-gray-700/75 capitalize  font-semibold"
                      href={link}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-sm text-center text-black lg:text-right">
          @Vaishakh-Nambiar; 2022.{" "}
          <a
            href="https://store.figma.com/"
            target="blank"
            className="text-black underline"
          >
            Reference
          </a>
        </p>
      </div>

      <marquee
        className="relative flex overflow-x-hidden uppercase my-4"
        scrollamount="10"
      >
        <div className="headers text-black font-au  mx-4 text-center my-2 flex flex-wrap text-[12px]">
          <h1 className="flex items-center justify-center ">
            {line}
            {line}
            {line}
          </h1>
        </div>
        {/* {line} */}
      </marquee>
    </footer>
  );
};

export default Footer;
