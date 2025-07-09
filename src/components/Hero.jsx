import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = SplitText.create(".title", { type: "chars, words" });
    const subtitleSplit = SplitText.create(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap
      .timeline()
      .from(heroSplit.chars, {
        yPercent: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
      })
      .from(subtitleSplit.lines, {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".left-leaf", { y: -200 }, 0)
      .to(".right-leaf", { y: 200 }, 0);

    // gsap.from(heroSplit.chars, { yPercent: 50, duration: 1, stagger: 0.05, ease: "back.out" });
  }, []);

  return (
    <section id="hero" className="noise">
      <h1 className="title">Hero</h1>
      <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
      <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
      <div className="body">
        <div className="content">
          <div className="tagline hidden md:block space-y-5">
            <p className="quotes">Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the spirit <br />
              of Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients, creative flair, and
              timeless recipes - designed to delight your senses.
            </p>
            <a href="#cocktails">View cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
