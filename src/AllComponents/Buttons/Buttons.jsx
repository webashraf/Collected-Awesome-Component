import ButtonWrapper from "./HoverDevButtons/ButtonWrapper";
import DottedButton from "./HoverDevButtons/DottedButton";
import HackerButton from "./HoverDevButtons/HackerButton";
import HoverToFillBorder from "./HoverDevButtons/HoverToFillBorder";
import NeuButton from "./HoverDevButtons/NeuButton";

const Buttons = () => {
  return (
    <div>
      <section className="py-20 w-[1320px] mx-auto">
        <h2 className="text-5xl uppercase text-center font-serif mb-10">
          Buttons
        </h2>

        <div className="grid grid-cols-3 gap-5">
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
            <HackerButton />
          </div>

          <div className="w-full mx-auto shadow-2xl rounded-lg">
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
            <div className="p-10">
              <ButtonWrapper />
            </div>
          </div>

          <div className="w-full mx-auto shadow-2xl rounded-lg">
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
            <div className="p-10">
              <DottedButton />
            </div>
          </div>

          <div className="w-full mx-auto shadow-2xl rounded-lg">
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
            <div className="p-10">
              <HoverToFillBorder />
            </div>
          </div>

          <div className="w-full mx-auto shadow-2xl rounded-lg">
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
            <div className="p-10">
              <NeuButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buttons;
