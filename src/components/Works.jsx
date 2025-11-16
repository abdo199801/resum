import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // Only import what exists
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`relative ${featured ? "sm:w-[400px] w-full" : "sm:w-[360px] w-full"}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
          className="absolute -top-3 -left-3 z-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Featured
          </div>
        </motion.div>
      )}

      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 500,
        }}
        className={`bg-tertiary/80 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
          featured ? "ring-2 ring-purple-500/50" : ""
        }`}
      >
        {/* Image Container */}
        <div className='relative w-full h-[230px] overflow-hidden rounded-2xl group'>
          <motion.img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          
          {/* Action Buttons */}
          <motion.div 
            className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500'
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            {source_code_link && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className='bg-black/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg border border-white/20'
              >
                <img
                  src={github}
                  alt='GitHub'
                  className='w-6 h-6 object-contain'
                />
              </motion.div>
            )}
            
            {live_demo_link && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(live_demo_link, "_blank")}
                className='bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg'
              >
                <span className="text-white font-bold text-lg">↗</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className='mt-6'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
        </div>

        {/* Tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", "web", "mobile", "fullstack"];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags?.some(tag => tag.name.toLowerCase() === filter) || 
        project.category === filter
      );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="flex flex-wrap gap-2 mt-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "bg-tertiary text-secondary hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="text-center mt-16"
      >
        <p className="text-secondary text-lg mb-4">
          Interested in working together?
        </p>
        <button
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Let's Talk
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");