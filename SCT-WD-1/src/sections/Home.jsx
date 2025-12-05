import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import image from "../assets/image.png";

export default function Home() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Software Developer",
    ],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];

    if (subIndex < current.length && !deleting) {
      const timeout = setTimeout(() => setSubIndex(subIndex + 1), 80);
      return () => clearTimeout(timeout);
    }

    if (subIndex > 0 && deleting) {
      const timeout = setTimeout(() => setSubIndex(subIndex - 1), 40);
      return () => clearTimeout(timeout);
    }

    if (subIndex === current.length) {
      setTimeout(() => setDeleting(true), 900);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  }, [subIndex, deleting, index, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />

      {/* BG Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] h-[70vw] max-w-[450px] max-h-[450px] rounded-full
         bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] max-w-[450px] max-h-[450px] rounded-full
         bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px] animate-pulse delay-500"></div>
      </div>

      {/* CONTENT */}
      <div
        className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 
      grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-20 lg:pt-0"
      >

        {/* LEFT SIDE IMAGE (FIXED + RESPONSIVE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-start order-1"
        >
          <div className="p-2 rounded-3xl bg-white/5 backdrop-blur-lg shadow-xl shadow-green-500/10
            border border-white/10 hover:scale-105 transition-all duration-300">

            <img
              src={image}
              alt="Ayush"
              className="w-60 sm:w-72 md:w-80 lg:w-[380px] rounded-2xl
              object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.25)]
              animate-floating"
            />
          </div>
        </motion.div>

        {/* Floating Animation */}
        <style>
          {`
            @keyframes floating {
              0% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0); }
            }
            .animate-floating {
              animation: floating 4s ease-in-out infinite;
            }
          `}
        </style>

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2">

          {/* Typed Roles */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 h-12 select-none">
            <span
              className="bg-gradient-to-r from-[#b721ff] via-[#21d4fd] to-[#6a00ff]
              bg-clip-text text-transparent font-extrabold
              drop-shadow-[0_0_12px_rgba(110,0,255,0.7)] tracking-wide"
            >
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="text-blue-300 animate-pulse ml-1">|</span>
          </h2>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-wide leading-tight"
          >
            <span
              className="bg-gradient-to-r from-green-400 to-green-600
              bg-clip-text text-transparent font-extrabold"
            >
              Hello, I'm
            </span>

            <br />

            <span className="text-white drop-shadow-xl">Ayush Kumar</span>
          </motion.h1>

          {/* Description */}
          <p className="mt-3 text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I build modern, fast, and interactive web applications using the MERN stack and advanced frontend technologies.
          </p>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/resume"
              className="px-8 py-3 text-lg font-semibold rounded-xl 
              bg-gradient-to-r from-green-500 to-green-700 text-white
              shadow-lg shadow-green-600/40 hover:shadow-green-400/70
              hover:scale-110 transition-all duration-300"
            >
              My Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-10">
            <a
              href="linkedin.com/in/ayush-kumar-35499a32bn"
              target="_blank"
              className="text-4xl text-blue-500 hover:scale-125 transition-all drop-shadow-[0_0_10px_rgba(0,150,255,0.8)]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Ayush8292006"
              target="_blank"
              className="text-4xl text-gray-300 hover:scale-125 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="text-4xl text-pink-500 hover:scale-125 transition-all drop-shadow-[0_0_10px_rgba(255,0,120,0.8)]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
