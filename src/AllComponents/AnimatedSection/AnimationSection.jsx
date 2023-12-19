import React from 'react';
import { HoverAnimation } from './HoverDevAnimatedSection/HoverAnimation';
import TrippyScroll from './HoverDevAnimatedSection/TrippyScroll';
import HoverLight from './HoverDevAnimatedSection/TextHoverLight';
import FuzzyOverlayExample from './HoverDevAnimatedSection/FuzzyOverlay';
import ClickToWab from './HoverDevAnimatedSection/ClickToWab';

const AnimationSection = () => {
    return (
        <div>
            <section className="py-20 w-[1320px] mx-auto">
        <h2 className="text-5xl uppercase text-center font-serif mb-10">
          Cards
        </h2>

        <div className="grid grid-cols-">



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
            <HoverAnimation />
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
            <TrippyScroll />
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
            <HoverLight />
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
            <FuzzyOverlayExample />
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
            <ClickToWab />
          </div>

        </div>

      </section>
        </div>
    );
};

export default AnimationSection;