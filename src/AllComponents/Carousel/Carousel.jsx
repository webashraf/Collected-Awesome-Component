import React from "react";
import { SwipeCarousel } from "./HoverDevCarousel/SwipeCarousel";
import ScrollXCarousel from "./HoverDevCarousel/ScrollXCarousel";
import ScrollCarousel from "./HoverDevCarousel/ScrollXCarousel";

const Carousel = () => {
  return (
    <div>
      <section className="py-96 h-[70vh] mx-auto pb-[1500px]">
        <h2 className="text-5xl uppercase text-center font-serif mb-10">
          Cards
        </h2>

        <div className="">
          

          <div className="w-full mx-auto shadow-2xl rounded-lg ">
            <SwipeCarousel />
            <div className="p-5">
              <h4 className="text-xl uppercase font-serif underline">
                Need Installation
              </h4>
              <ul>
                <li className="text-blue-800">
                  <a href="https://react-icons.github.io/react-icons/">
                    React Icons
                  </a>
                </li>
                <li className="text-blue-800">
                  <a href="https://www.framer.com/">Farmer Motion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mx-auto shadow-2xl rounded-lg ">
            <ScrollCarousel />
            <div className="p-5">
              <h4 className="text-xl uppercase font-serif underline">
                Need Installation
              </h4>
              <ul>
                <li className="text-blue-800">
                  <a href="https://react-icons.github.io/react-icons/">
                    React Icons
                  </a>
                </li>
                <li className="text-blue-800">
                  <a href="https://www.framer.com/">Farmer Motion</a>
                </li>
              </ul>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
};

export default Carousel;
