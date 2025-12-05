import image from "../assets/image.png";

export default function About() {

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full relative bg-black text-white overflow-hidden flex items-center"
    >

      {/* ✅ GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ✅ LEFT CONTENT */}
          <div className="flex flex-col gap-6 animate-fade">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              Ayush Kumar
            </h1>

            <h2 className="text-xl text-[#1cd8d2] font-medium">
              Web Developer
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-xl">
              I build modern and high-performance chat applications using React
              with real-time features and clean UI for great user experience.
            </p>

            {/* Tags */}
            <div className="flex gap-4 flex-wrap">
              <span className="px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                Specially
              </span>
              <span className="px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                Focus
              </span>
            </div>

            {/* ✅ ANCHOR BUTTONS */}
            <div className="flex gap-6 mt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] text-black font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
              >
                Get In Touch
              </a>
            </div>

            <div className="border-t border-dashed border-white/30 my-6"></div>

            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a frontend developer and AI student from GL Bajaj, passionate
              about creating interactive and scalable web applications using React.
            </p>

          </div>

          {/* ✅ RIGHT IMAGE */}
     <div className="p-13 rounded-3xl bg-white/5 backdrop-blur-lg shadow-xl shadow-green-500/10
               border border-white/10 hover:scale-90 transition-all duration-300">
   
               <img
                 src={image}
                 alt="Ayush"
                 className="w-60 sm:w-72 md:w-80 lg:w-[380px] rounded-2xl
                 object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.25)]
                 animate-floating"
               />
             </div>


        </div>
      </div>
    </section>
  );
}
