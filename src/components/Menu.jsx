import { useRef, useState } from "react";
import { sliderLists } from "../constants";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recipeRef = useRef();
  const lengthCocktail = sliderLists.length;

  const switchCocktail = (index) => {
    const newIndex = (index + lengthCocktail) % lengthCocktail;
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
          <button className="text-left" onClick={() => switchCocktail(currentIndex - 1)}>
            <img src="/images/left-arrow.png" alt="left-arrow" />
          </button>
          <button className="text-left" onClick={() => switchCocktail(currentIndex + 1)}>
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
          <div className="info" ref={recipeRef}>
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
