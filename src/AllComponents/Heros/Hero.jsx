
import HeroGallery from "./HoverDevHero/HeroGallery";

const Hero = () => {
  return (
    <div>
      <section className="bg-cyan-800 h-[1200px]">
        <h2 className="text-5xl uppercase text-center font-serif mb-10">
          Cards
        </h2>

        <div className="">
          

          <div className="w-full mx-auto shadow-2xl rounded-lg ">
            <HeroGallery />
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

export default Hero;
