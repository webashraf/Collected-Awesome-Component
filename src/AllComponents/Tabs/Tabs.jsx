import React from "react";
import ChipTabs from "./HoverDevTabs/Tabs";
import ToggleTab from "./HoverDevTabs/Toggole";

const Tabs = () => {
  return (
    <div>
      <section className="py-20 w-[1320px] mx-auto">
        <h2 className="text-5xl uppercase text-center font-serif mb-10">
          TABS
        </h2>

        <div className="grid grid-cols-1 gap-5">
          <div className="w-full mx-auto shadow-2xl rounded-lg ">
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
            <ChipTabs />
          </div>
          <div className="w-full mx-auto shadow-2xl rounded-lg ">
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
            <ToggleTab />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tabs;
