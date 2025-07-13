import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

import { featureLists, goodLists } from "../constants";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const startTL = isMobile ? "top 10%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: startTL,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".fade-out", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", { duration: 1, scale: 1.3, maskSize: "400%", ease: "power1.inOut" })
      .to("#masked-content", { opacity: 1, ease: "power1.inOut" });
  }, []);

  return (
    <section id="art">
      <div className="container mx-auto">
        <h2 className="fade-out">The ART</h2>
        <div className="content">
          <ul className="fade-out">
            {goodLists.map((good, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check-icon" />
                <p>{good}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="profile"
              className="abs-center masked-img md:size-full size-3/4 object-contain"
            />
          </div>

          <ul className="fade-out">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check-icon" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="fade-out">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
