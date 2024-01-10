import AnimationSection from "./AllComponents/AnimatedSection/AnimationSection";
import Buttons from "./AllComponents/Buttons/Buttons";
import Cards from "./AllComponents/Cards/Cards";
import Carousel from "./AllComponents/Carousel/Carousel";
import CountDown from "./AllComponents/CountDown/CountDown";
import Hero from "./AllComponents/Heros/Hero";
import Menu from "./AllComponents/Menu/Menu";
import Tabs from "./AllComponents/Tabs/Tabs";

const App = () => {
  return (
    <>
      <Carousel></Carousel>
      <Hero></Hero>
      <Buttons></Buttons>
      <Cards></Cards>
      <CountDown></CountDown>
      <Menu></Menu>
      <AnimationSection></AnimationSection>
      <Tabs></Tabs>
    </>
  );
};

export default App;
