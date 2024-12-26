import { useScroll, useTransform, motion } from "framer-motion";
import { Element } from "react-scroll";

const About = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // Transform top position from 50% to 0% based on scroll progress
  const topPosition = useTransform(scrollYProgress, [0, 1], ["85%", "-85%"]);

  return (
    <Element name = "about lg:block hidden">
    <div className="min-h-screen bg-[#f4f0ea] lg:px-40 px-10 py-16 flex lg:flex-row flex-col gap-20 text-[#271212] items-center lg:justify-between justify-center text-center lg:text-left">
      <div className="relative">
        {/* Static image */}
        <img src="/img/About/img2.png" alt="" className="w-1/2 rounded-md" />

        {/* Animated image */}
        <motion.img
          src="/img/About/img1.png"
          alt=""
          className="w-[40%] absolute left-1/4 rounded-md"
          style={{ top: topPosition }} 
        />
      </div>
      <div>
        <h1 className="text-4xl text-center md:text-left font-bold ">Pure Copper...Pure Soul...</h1>
        <p className="max-w-xl text-xl font-semibold">
          Crafting excellence in copper for over 40 years with a diverse range
          of top-quality products designed to meet global standards at
          affordable prices.
        </p>
      </div>
    </div>
    </Element>
  );
};

export default About;
