import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full text-white text-2xl font-bold'>
          {experience.icon}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies?.map((tech, index) => (
          <span
            key={index}
            className="text-[12px] bg-[#915EFF] px-2 py-1 rounded-full text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const myExperiences = [
    {
      title: "Full Stack Developer & Web Scraping Specialist",
      company_name: "Blue Ocean Production",
      icon: "💻", // Using emoji as fallback icon
      iconBg: "#383E56",
      date: "2023 - Present",
      technologies: ["Next.js", "React", "PHP", "SQL", "Python", "JavaScript", "Web Scraping"],
      points: [
        "Developed and maintained web applications using Next.js, React, and modern JavaScript frameworks",
        "Built responsive front-end interfaces with optimized performance and user experience",
        "Implemented server-side functionality using PHP and Node.js for backend operations",
        "Designed and managed SQL databases, writing efficient queries and ensuring data integrity",
        "Created web scraping solutions to extract and analyze data from landing pages and service sections",
        "Automated data collection processes and developed APIs for data integration",
        "Collaborated on full-stack projects from concept to deployment using modern development workflows"
      ],
    },
    {
      title: "Web Developer (Intern)",
      company_name: "IT ADVISOR",
      icon: "🌐", // Using emoji as fallback icon
      iconBg: "#E6DEDD",
      date: "August 2023",
      technologies: ["WordPress", "PHP", "SQL", "HTML5", "CSS3", "JavaScript"],
      points: [
        "Developed company websites using WordPress CMS with custom PHP functionality",
        "Created and optimized SQL databases for website content management",
        "Implemented front-end features using modern web technologies (HTML5, CSS3, JavaScript)",
        "Assisted in website maintenance, performance optimization, and troubleshooting",
        "Gained experience in professional web development workflows and project management",
        "Collaborated with team members on client projects and requirements analysis"
      ],
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {myExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");