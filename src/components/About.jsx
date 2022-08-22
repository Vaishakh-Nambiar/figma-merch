import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { about, symbols } from "../assets";
import Badge from "./badge";

const About = () => {
  //   console.log(about);
  const { img, aboutInfo, misc, tags } = about;
  const { title, info } = misc;
  // const {title,qa}=tags

  return (
    <div className="w-screen text-black">
      <div className="parent  flex flex-col w-full ">
        <Nav />
      </div>
      <main>
        <section className="p-6">
          <div className="cnt flex mx-12">
            <div className="px-8 py-4 basis-1/2 ">
              <img src={img} alt="" className="" />
            </div>
            <div className="flex items-center basis-1/2 ">
              <div className="textCol p-6  flex flex-col">
                <div className="my-6 header-title ">About</div>
                <p className="text-[32px] leading-10">{aboutInfo}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="p-4 my-8">
          <div className="flex items-center justify-center my-8">
            <Badge />
          </div>
        </div>

        <section className=" p-6">
          <div className="cnt flex mx-12">
            <div className="px-8 py-4 basis-1/2  leading-tight">
              <div className="header-title  ">{title}</div>
            </div>
            <div className="flex items-center basis-1/2 ">
              <div className="textCol p-6  flex flex-col leading-10 ">
                <p className="text-[32px]">{info}</p>
              </div>
            </div>
          </div>
        </section>

        {tags.map((t, i) => {
          const { title, qa } = t;

          return (
            <section className=" p-6" key={`&${i}`}>
              <div className="cnt flex mx-12">
                <div className="px-8 py-4 basis-1/2  leading-tight">
                  <div className="header-title  ">{title}</div>
                </div>
                <div className="flex items-center basis-1/2 ">
                  <div className="textCol py-4 px-8  flex flex-col leading-8 ">
                    {qa.map((que, i) => {
                      const { q, a } = que;
                      return (
                        <ul key={`@${i}`} className="">
                          <li className="my-6">
                            <div className="header mb-2 flex items-center ">
                              <span className="px-4">
                                <img
                                  src={symbols[i]}
                                  alt=""
                                  className="h-[20px]"
                                />
                              </span>
                              {q}
                            </div>
                            <p className="text-[24px]">{a}</p>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default About;
