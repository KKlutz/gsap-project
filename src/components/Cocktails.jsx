import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";
import { cocktailLists, mocktailLists } from "../constants/index.js";

const Cocktails = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const ctSplitText = SplitText.create(".ct-list", { type: "lines" });
    const mtSplitText = SplitText.create(".mt-list", { type: "lines" });

    const startListTL = isMobile ? "20% 30%" : "50% 30%";
    const endListTL = isMobile ? "bottom bottom" : "bottom 80%";
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".list",
          start: startListTL,
          end: endListTL,
          // markers: true,
        },
      })
      .from(".popular h2, .loved h2", { opacity: 0 })
      .from(
        ctSplitText.lines,
        {
          yPercent: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "expo.out",
        },
        1
      ) // Start at the same time
      .from(
        mtSplitText.lines,
        {
          yPercent: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "expo.out",
        },
        1
      ); // Start at the same time

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from(".ct-left-leaf", { x: -100, y: 100 })
      .from(".ct-right-leaf", { x: 100, y: 100 });
  }, []);

  return (
    <section id="cocktails" className="noise">
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" className="ct-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="right-leaf" className="ct-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul className="ct-list">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul className="mt-list">
            {mocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
