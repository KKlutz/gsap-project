import { gsap, ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Example />
      <div className="flex-center h-screen">
        <h1 className="text-3xl font-mono font-normal">GSAP App</h1>
      </div>
    </main>
  );
};

export default App;
