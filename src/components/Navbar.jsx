import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-2xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to='/'
            className='flex items-center gap-3 group'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={logo} 
                alt='Abdellah Baqba Logo' 
                className='w-10 h-10 object-contain drop-shadow-lg' 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
            </motion.div>
            
            <div className="flex flex-col">
              <motion.p 
                className='text-white text-xl font-bold cursor-pointer'
                whileHover={{ color: "#915EFF" }}
                transition={{ duration: 0.2 }}
              >
                Abdellah Baqba
              </motion.p>
              <motion.span 
                className='text-secondary text-sm font-light hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              >
                Full Stack Developer
              </motion.span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((nav, index) => (
            <motion.div
              key={nav.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <a
                href={`#${nav.id}`}
                className={`relative px-6 py-3 font-medium transition-all duration-300 ${
                  active === nav.title 
                    ? "text-white" 
                    : "text-secondary hover:text-white"
                }`}
                onClick={() => setActive(nav.title)}
                onMouseEnter={() => setIsHovered(nav.id)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {nav.title}
                
                {/* Animated underline */}
                <motion.div
                  className={`absolute bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 ${
                    active === nav.title ? "w-full" : "w-0"
                  }`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            </motion.div>
          ))}
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #915EFF, #6A42FF)"
            }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.div 
          className='lg:hidden flex flex-1 justify-end items-center'
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-8 h-8 object-contain cursor-pointer z-50'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: toggle ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggle(false)}
              />
            )}
          </AnimatePresence>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-full w-80 bg-primary/95 backdrop-blur-md shadow-2xl border-l border-white/10 z-40 lg:hidden"
              >
                <div className="flex flex-col h-full pt-20 px-8">
                  {/* Menu Header */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-12"
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">Navigation</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </motion.div>

                  {/* Menu Items */}
                  <ul className='list-none flex-1 flex flex-col gap-6'>
                    {navLinks.map((nav, index) => (
                      <motion.li
                        key={nav.id}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-white/10 last:border-b-0"
                      >
                        <a
                          href={`#${nav.id}`}
                          className={`block py-4 text-xl font-medium transition-all duration-300 ${
                            active === nav.title 
                              ? "text-white" 
                              : "text-secondary hover:text-white"
                          }`}
                          onClick={() => {
                            setToggle(false);
                            setActive(nav.title);
                          }}
                        >
                          <motion.span
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center"
                          >
                            {nav.title}
                          </motion.span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile Footer */}
                  <motion.div
                    variants={itemVariants}
                    className="py-8 border-t border-white/10"
                  >
                    <button
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg"
                      onClick={() => {
                        setToggle(false);
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Contact Me
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;