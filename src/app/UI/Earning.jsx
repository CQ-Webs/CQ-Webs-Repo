"use client"
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

const StickySection = ({ imageSrc, headline, bonus }) => {
  const motionDiv = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: motionDiv,
    offset: ["start end", "end start"],
  });

  // Animate height and width based on scroll within this section
  const height = useTransform(scrollYProgress, [0, 0.3], ["40vh", "100vh"]);
  const width = useTransform(scrollYProgress, [0, 0.3], ["80%", "100%"]);

  // Opacity visibility
  const isTextInView = useInView(textRef, { once: false, amount: 0.3 });
  const isMotionDivInView = useInView(motionDiv, { once: false, amount: 0.2 });

  return (
    <div className="sticky top-0 w-full flex justify-center z-10 mb-20">
      <motion.div
        className="rounded-lg shadow-2xl relative overflow-hidden"
        ref={motionDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMotionDivInView ? 1 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ height, width }}
      >
        <img
          src={imageSrc}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-6 md:p-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]) }}
        >
          <motion.h5
            ref={textRef}
            className="text-2xl md:text-4xl lg:text-5xl text-white font-bold py-24 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTextInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTextInView? 1 : 0 }}
          transition={{ duration: 0.5 }} 
          className="absolute top-32 right-32 max-w-md w-full sm:w-auto p-6 rounded-2xl 
          bg-white/10 backdrop-blur-lg border border-white/20 text-white text-xl sm:text-2xl font-serif shadow-2xl">
          <h2>{bonus}</h2>
        </motion.div>

      </motion.div>
    </div>
  );
};

const Earning = () => {
  const containerRef = useRef(null);

  return (
    <div className="relative w-full h-auto bg-black" ref={containerRef}>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-6xl lg:text-7xl text-white mb-10 text-center px-4">
          Let's see what you'll get
        </h3>

        {/* Render multiple sticky sections */}
        <StickySection
          imageSrc="/images/restaurant2.jpg"
          headline="SuperPowered service for your clients"
          bonus="Did you know 4 out of 5 customers check a business online before visiting?
          No website? No visit."
        />
        <StickySection
          imageSrc="/images/restaurant1.jpg"
          headline="Clients that love your work"
          bonus="Did you know that businesses with websites generate up to 2x more customer trust?
          A sleek website builds confidence before they even walk through the door."
        />
        <StickySection
          imageSrc="/images/restaurant3.jpg"
          headline="Your bussiness all in one place 24/7"
          bonus="Did you know restaurants without a website miss out on 70% of first-time online searches?
          Today's customers Google before they go—if you're not visible, you're invisible."
        />
        <StickySection
          imageSrc="/images/restaurant4.jpg"
          headline="Always available for your clients"
          bonus="Did you know you can take reservations, display menus, and accept orders—right from your site?
          No app needed. Just a smart website."
        />
        <StickySection
          imageSrc="/images/restaurant5.jpg"
          headline="Deliver the best experience for your clients"
          bonus="Did you know 90% of people expect a business to have a website in 2025?
          Stay ahead—or get left behind."
        />

        {/* Filler content to enable scrolling */}
        <div className="h-[50vh] bg-black" />
      </div>
    </div>
  );
};

export default Earning;
