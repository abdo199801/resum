import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Web Applications", "User Experiences", "Digital Solutions", "Full Stack Systems"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content - Split Layout */}
      <div className={`h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4`}>
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center items-start space-y-6 lg:space-y-8"
        >
          {/* Animated Line Indicator */}
          <div className="flex items-start gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col items-center mt-2"
            >
              <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-purple-500/50" />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-0.5 bg-gradient-to-b from-[#915EFF] to-transparent mt-2"
              />
            </motion.div>

            <div className="space-y-4">
              {/* Main Heading */}
              <div>
                <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                  Hi, I'm <span className='text-[#915EFF]'>Abdellah</span>
                </h1>
                <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                  <span className='text-[#915EFF]'>Baqba</span>
                </h1>
              </div>

              {/* Dynamic Subtitle */}
              <div className="h-12 flex items-center">
                <p className={`${styles.heroSubText} text-white-100 mr-2`}>
                  I develop
                </p>
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`${styles.heroSubText} text-[#915EFF] font-bold`}
                >
                  {texts[currentText]}
                </motion.span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Full Stack Developer passionate about creating digital experiences 
                that combine modern technology with elegant design.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#915EFF] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#915EFF] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#915EFF]/10 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Laptop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center"
        >
          <ComputersCanvas />
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-[#915EFF] rounded-full flex justify-center items-start p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-1.5 h-1.5 rounded-full bg-[#915EFF]'
              />
            </div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;