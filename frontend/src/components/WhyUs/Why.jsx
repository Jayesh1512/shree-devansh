import React from 'react' 
import { motion } from 'framer-motion'
import { FaAward, FaStar, FaCog, FaMoneyBillWave, FaEnvelope } from 'react-icons/fa'
import { SiFlipkart, SiAmazon } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

export default function BusinessHighlights() {
  const navigate = useNavigate()
  const highlights = [
    { icon: FaAward, text: '40+ years of experience in the industry' },
    { icon: FaStar, text: 'Exceptional Service & Quality' },
    { icon: FaCog, text: 'Provides custom solutions' },
    { icon: FaMoneyBillWave, text: 'Best in Industry pricing in both Bulk & Retail' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="bg-[#f4f0ea] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          Our Business Highlights
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className=" rounded-lg shadow-lg p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <highlight.icon className="text-4xl text-blue-600" />
              <p className="text-xl text-gray-700">{highlight.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-row justify-center items-center space-y-6 sm:space-y-0 space-x-12 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            variants={floatVariants}
            animate="float"
          >
            <SiFlipkart className="text-6xl text-yellow-500" />
          </motion.a>
          <motion.a
            href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A2GP2T5FXD1LNX"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
            variants={floatVariants}
            animate="float"
          >
            <SiAmazon className="text-6xl text-black" />
          </motion.a>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <motion.button
            className="inline-flex items-center space-x-2 bg-[#411900] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#411900ed] transition-colors duration-300"
            onClick={() => navigate("/contact-us")}
            variants={pulseVariants}
            animate="pulse"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className='md:block hidden'  />
            <span>Contact us for Bulk & Bespoke solutions</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
