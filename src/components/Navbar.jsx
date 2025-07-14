import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../constants/index.js";

// gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    const navTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".navlinks",
        start: "bottom top",
        end: "bottom",
        scrub: true,
      },
    });

    navTimeline.fromTo(
      ".navlinks",
      { backgroundColor: "transparent" },
      { backgroundColor: "#00000066", backdropFilter: "blur(5px)", duration: 1 }
    );
  }, []);

  return (
    <nav className="navlinks">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="text-sm">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
