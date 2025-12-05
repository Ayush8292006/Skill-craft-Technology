import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-black text-gray-300 overflow-hidden">

      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-20 left-0 w-[400px] h-[400px] rounded-full 
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full 
          bg-gradient-to-r from-[#b721ff] via-[#21d4fd] to-[#6a00ff]
          blur-[150px] animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 
        grid grid-cols-1 sm:grid-cols-3 gap-14">

        {/* Left - Brand */}
        <div>
          <h2 className="text-4xl font-extrabold 
            bg-gradient-to-r from-green-400 to-green-600 
            bg-clip-text text-transparent drop-shadow-lg">
            Ayush Kumar
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed max-w-sm">
            MERN Stack Developer • Web Developer  
            Creating modern, interactive and performance-focused web experiences.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-white transition-all 
                hover:translate-x-2 duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Social Icons */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Social Links</h3>
          <div className="flex gap-7 text-3xl">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="text-blue-400 hover:scale-125 transition-all 
                drop-shadow-[0_0_12px_rgba(0,150,255,0.6)]"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ayush8292006"
              className="text-gray-300 hover:scale-125 transition-all 
                drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              className="text-pink-500 hover:scale-125 transition-all 
                drop-shadow-[0_0_12px_rgba(255,0,120,0.6)]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <p className="text-center text-sm text-gray-300">
          copyright © {new Date().getFullYear()} Ayush Kumar — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
