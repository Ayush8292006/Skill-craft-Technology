import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "NumPy", icon: <FaCode /> },
  { name: "Pandas", icon: <FaCode /> },
  { name: "C++", icon: <FaCode /> },
  { name: "C", icon: <FaCode /> }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-black text-white py-24 px-6 overflow-hidden min-h-[800px]"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Technologies & tools I work with to build modern web experiences
        </p>
      </div>

      {/* Scrolling Icons */}
      <div className="relative w-full p-25">
        <div className="flex gap-8 w-max animate-skill-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center
              min-w-[120px] h-[160px]
              rounded-2xl bg-white/5 backdrop-blur-md
              border border-white/10
              shadow-lg shadow-cyan-500/10
              hover:scale-110 transition-all duration-300"
            >
              <div className="text-4xl text-[#1cd8d2] drop-shadow-[0_0_10px_rgba(0,255,200,0.6)] animate-pulse">
                {skill.icon}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        .animate-skill-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;