import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cocktailLists, mocktailLists } from "../constants/index.js";

const Cocktails = () => {
  useGSAP(() => {
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
          <ul>
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
          <ul>
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
