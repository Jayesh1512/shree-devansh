import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing1 = () => {
  // State to track if screen is medium or larger
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

  // Using Framer Motion to get scroll progress
  const { scrollYProgress } = useScroll();

  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["150%", "20%"]); // Start from 150% and zoom out to 100%

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumOrLarger(window.innerWidth >= 768); // 768px is typically the breakpoint for medium devices
    };

    checkScreenSize(); // Run on initial load

    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const animateValue = (id, start, end, duration) => {
      const element = document.getElementById(id);
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue("counter-40", 0, 40, 2000);
          animateValue("counter-50", 0, 50, 2000);
          observer.disconnect(); // Stop observing once the animation has started
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const target = document.querySelector(".landingHeader");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div>
    <motion.div
      className="relative min-h-[100vh] md:min-h-[160vh] landing-anim bg-cover overflow-x-hidden"
      style={{
        backgroundImage: 'url("/img/Landing/landing1.png")', 
        backgroundPosition: "center",
        backgroundSize: isMediumOrLarger ? backgroundSize : "100%", 
      }}
    >
      <div className="absolute backdrop-blur-sm bottom-0 md:bottom-8 w-screen md:w-[95vw] md:left-[2.5vw] flex justify-center md:rounded-md bg-[#f4f0ea] md:bg-[#f4f0ea]/75">
        <div className="text-[#fdeed1] sourceSans rounded-md flex flex-col md:flex-row md:gap-16 p-10 text-center items-center w-fit landingHeader">
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <span id="counter-40" className="font-semibold text-6xl">
                0
              </span>
              <span className="text-3xl">Years</span>
            </p>
          </div>
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <div className="flex items-center justify-between">
                <span id="counter-50" className="font-semibold text-6xl">
                  0
                </span>
                <span>+</span>
              </div>
              <span className="text-3xl">Products</span>
            </p>
          </div>
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <span className="font-semibold text-4xl">Exciting</span>
              <span className="text-2xl">Categories</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Landing1;
