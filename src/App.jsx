import { gsap, ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Example from "./components/example";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Example />
      <div className="flex-center h-screen">
        <h1 className="text-3xl font-mono font-normal">GSAP App</h1>
      </div>
    </main>
  );
};

export default App;
