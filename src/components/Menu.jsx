import { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef(0); // 1 = right, -1 = left

  // animation text
  useGSAP(() => {
    const menuTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "45% center",
        end: "bottom bottom",
      },
    });

    menuTimeline
      .fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".details h2", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" }, "-=0.85")
      .fromTo(".details p", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" }, "-=0.85");
  }, [currentIndex]);

  // animation slider image
  useGSAP(() => {
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: 100 * -directionRef.current },
      { opacity: 1, xPercent: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]);

  const lengthCocktail = sliderLists.length;

  const switchCocktail = (index, direction) => {
    const newIndex = (index + lengthCocktail) % lengthCocktail;
    directionRef.current = direction;
    setCurrentIndex(newIndex);
  };

  const getCurrentCockTail = () => {
    return sliderLists[(currentIndex + lengthCocktail) % lengthCocktail];
  };

  const currentCocktail = getCurrentCockTail();

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* <img src="" alt="left-leaf" id="m-left-leaf" />
      <img src="" alt="right-leaf" id="m-right-leaf" /> */}

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white border-b-1"
                  : "text-white/50 border-white/50 hover:text-yellow hover:border-yellow border-b-1 transition-colors"
              }`}
              onClick={() => switchCocktail(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => switchCocktail(currentIndex - 1, -1)}>
            <img src="/images/left-arrow.png" alt="left-arrow" />
          </button>
          <button className="text-left" onClick={() => switchCocktail(currentIndex + 1, 1)}>
            <img src="/images/right-arrow.png" alt="right-arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={`${currentCocktail.image}`}
            alt={`${currentCocktail.name}`}
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
