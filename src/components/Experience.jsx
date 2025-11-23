import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2366 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #915EFF",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #915EFF, 0 8px 20px rgba(0,0,0,0.3)",
        border: "2px solid #fff"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full text-white text-2xl font-bold'>
          {experience.icon}
        </div>
      }
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-[#915EFF] text-[18px] font-semibold' style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>
        <div className="bg-[#915EFF] px-3 py-1 rounded-full">
          <span className="text-white text-[12px] font-bold">{experience.type}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies?.map((tech, index) => (
          <span
            key={index}
            className="text-[12px] bg-gradient-to-r from-[#915EFF] to-[#7B4FFF] px-3 py-1 rounded-full text-white font-medium shadow-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className='mt-6 list-none ml-0 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-4 tracking-wide leading-6 relative'
            style={{
              borderLeft: "2px solid #915EFF"
            }}
          >
            <span className="absolute -left-1.5 top-2 w-2 h-2 bg-[#915EFF] rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>

      {experience.achievements && (
        <div className="mt-6 p-4 bg-gradient-to-r from-[#915EFF]/20 to-[#7B4FFF]/10 rounded-lg border border-[#915EFF]/30">
          <h4 className="text-white font-bold text-[16px] mb-2">Key Achievements:</h4>
          <ul className="list-disc ml-5 space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="text-white-100 text-[13px]">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const myExperiences = [
    {
      title: "Full Stack Developer & Web Scraping Specialist",
      company_name: "Blue Ocean Production",
      icon: "💻",
      iconBg: "#383E56",
      date: "2025 - Present",
      type: "Full-time",
      technologies: ["Next.js", "React", "Node.js", "Python", "PHP", "SQL", "MongoDB", "Web Scraping", "REST APIs", "JavaScript"],
      points: [
        "Architected and developed scalable full-stack web applications using modern frameworks, improving application performance by 40% through optimized code and efficient database design",
        "Engineered robust web scraping solutions that automated data extraction from 50+ landing pages, reducing manual data collection time by 85% and providing real-time competitive intelligence",
        "Led the design and implementation of RESTful APIs and microservices architecture, enabling seamless data integration across multiple platforms and improving system reliability",
        "Implemented responsive UI/UX designs with modern CSS frameworks, resulting in 30% improved user engagement and mobile responsiveness across all devices",
        "Optimized database performance through advanced query optimization and indexing strategies, reducing average response times from 2.1s to 0.3s",
        "Collaborated on full-stack projects from concept to deployment using modern development workflows and CI/CD pipelines"
      ],
      achievements: [
        "Reduced data processing time by 85% through automated scraping pipelines",
        "Improved application performance metrics by 40% through code optimization",
        "Delivered 15+ production-ready features ahead of schedule",
        "Achieved 99.9% system uptime through robust error handling and monitoring"
      ]
    },
    {
      title: "Web Development Engineer (Intern)",
      company_name: "IT ADVISOR",
      icon: "🌐",
      iconBg: "#E6DEDD",
      date: "August 2023",
      type: "Internship",
      technologies: ["WordPress", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Design"],
      points: [
        "Developed and deployed 3+ enterprise WordPress websites with custom PHP functionality, implementing responsive designs that achieved 99% mobile compatibility scores",
        "Engineered custom SQL database schemas and optimized existing structures, improving query performance by 60% and ensuring data integrity across all client projects",
        "Implemented advanced front-end features using modern JavaScript (ES6+) and jQuery, enhancing user interactivity and creating dynamic, engaging user experiences",
        "Conducted comprehensive website performance audits and optimization, resulting in 45% faster load times and improved Core Web Vitals scores",
        "Collaborated with senior developers in agile workflows, participating in daily stand-ups, sprint planning, and code reviews while maintaining 100% project deadline adherence",
        "Gained hands-on experience with professional development tools and version control systems in a production environment"
      ],
      achievements: [
        "Optimized website load times by 45% across all client projects",
        "Achieved 99% mobile compatibility scores on developed websites",
        "Received exceptional performance review from senior development team",
        "Successfully delivered all projects within tight deadlines"
      ]
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#7B4FFF] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="mt-4 text-center">
        <p className="text-white-200 text-lg max-w-3xl mx-auto leading-7">
          Building innovative web solutions and driving business value through cutting-edge technologies, 
          from full-stack development to advanced web scraping systems.
        </p>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="linear-gradient(to bottom, #915EFF, #7B4FFF)">
          {myExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#915EFF]/10 to-[#7B4FFF]/10 p-8 rounded-2xl border border-[#915EFF]/20">
          <h3 className="text-white text-2xl font-bold mb-4">Technical Excellence & Growth</h3>
          <p className="text-white-200 text-lg leading-8 max-w-4xl mx-auto">
            Continuously evolving as a developer by mastering new technologies and methodologies. 
            From building scalable full-stack applications to creating intelligent web scraping systems, 
            I'm passionate about solving complex problems and delivering high-quality, impactful solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");