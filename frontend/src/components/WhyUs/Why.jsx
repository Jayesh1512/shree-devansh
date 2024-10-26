import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Sample logos (replace with actual URLs or images)
import FlipkartLogo from '/assets/flipkart.jpeg';
import AmazonLogo from '/assets/amazon.png';  


const BusinessHighlights = () => {
  // Refs for scrolling animations
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // Using useInView to trigger animations when items come into view
  const inView1 = useInView(ref1, { once: true, threshold: 0.2 });
  const inView2 = useInView(ref2, { once: true, threshold: 0.2 });
  const inView3 = useInView(ref3, { once: true, threshold: 0.2 });
  const inView4 = useInView(ref4, { once: true, threshold: 0.2 });
  const inView5 = useInView(ref5, { once: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-center text-gray-800 mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        Our Business Highlights
      </motion.h1>

      {/* Experience Section */}
      <motion.div
        ref={ref1}
        className="text-2xl text-center mb-8 text-gray-700"
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        40+ years of experience in the industry
      </motion.div>

      {/* Service Quality Section */}
      <motion.div
        ref={ref2}
        className="text-2xl text-center mb-8 text-gray-700"
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Exceptional Service & Quality
      </motion.div>

      {/* Custom Solutions Section */}
      <motion.div
        ref={ref3}
        className="text-2xl text-center mb-8 text-gray-700"
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Provides custom solutions
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        ref={ref4}
        className="text-2xl text-center mb-8 text-gray-700"
        initial="hidden"
        animate={inView4 ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Best in Industry pricing in both Bulk & Retail
      </motion.div>

      {/* Available on Flipkart and Amazon */}
      <motion.div
        ref={ref5}
        className="flex justify-center items-center space-x-8 mb-12"
        initial="hidden"
        animate={inView5 ? 'visible' : 'hidden'}
        variants={scaleUp}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
          <img src={FlipkartLogo} alt="Flipkart Store" className="w-32 h-32 object-contain" />
        </a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src={AmazonLogo} alt="Amazon Store" className="w-32 h-32 object-contain" />
        </a>
      </motion.div>

      {/* Bulk and Bespoke Solutions Contact */}
      <motion.div
        className="text-lg text-center mb-4"
        initial="hidden"
        animate={inView5 ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a href="mailto:contact@company.com" className="text-blue-600 underline">
          Contact us for Bulk & Bespoke solutions
        </a>
      </motion.div>
    </div>
  );
};

export default BusinessHighlights;
