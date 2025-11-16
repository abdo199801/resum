import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-8 rounded-2xl xs:w-[320px] w-full border border-[#2A0E61] shadow-lg hover:shadow-xl transition-all duration-300'
  >
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={`${name} - ${designation}`}
          className='w-12 h-12 rounded-full object-cover border-2 border-[#915EFF]'
        />
      </div>
      <div className="ml-4">
        <p className='text-white font-semibold text-[16px]'>{name}</p>
        <p className='text-secondary text-[12px] mt-1'>
          {designation}
        </p>
        <p className='text-secondary text-[12px]'>
          {company}
        </p>
      </div>
    </div>

    <div className='mt-4'>
      <p className='text-white-100 tracking-wide text-[15px] leading-relaxed italic'>
        "{testimonial}"
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-[#2A0E61]">
      <div className="flex items-center text-[#915EFF]">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="text-sm font-medium">Recommended</span>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-2xl overflow-hidden`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Professional Endorsements</p>
          <h2 className={styles.sectionHeadText}>Client & Colleague Feedback.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here's what professionals I've worked with say about my technical skills, 
          work ethic, and collaborative approach to problem-solving.
        </motion.p>
      </div>
      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-6`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");