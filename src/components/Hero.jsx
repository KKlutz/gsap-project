import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const heroSplit = SplitText.create(".title", { type: "chars, words" });
    const subtitleSplit = SplitText.create(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animation timeline for hero title and subtitle
    gsap
      .timeline()
      .from(heroSplit.chars, {
        yPercent: 50,
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

    // Animation timeline for the leaves
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

    //TODO: Implement the video animation with Scroll Trigger
    const startTimeline = isMobile ? "top 50%" : "center 60%";
    const endTimeline = isMobile ? "120% top" : "bottom top";

    // Create video animation timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startTimeline,
        end: endTimeline,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
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

      <div className="video absolute inset-0">
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"></video>
      </div>
    </>
  );
};

export default Hero;
